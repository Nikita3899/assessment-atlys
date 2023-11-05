import React, { useState, useEffect } from 'react'
import style from './formCompoent.module.scss'
import clsx from 'clsx';
import { Button, Form, Input, message } from 'antd';

const FormComponent = () => {

  const [userDetails, setUserDetails] = useState({
    userName:'',
    email:'',
    password:''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isShowDashboard, setIsShowDashboard] = useState(false)

  useEffect(() => {
    // Check if the user is already registered in local storage
    console.log(userDetails,'jhgfhbj')
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, [userDetails.password]);

  const handleLogIn = () =>{
    setIsLoggedIn(!isLoggedIn); 
  }

  const onFinish = (values: any) => {
    const storedUserDetails = localStorage.getItem('userDetails');

    if(storedUserDetails){

        const userStored = JSON.parse(storedUserDetails);
        if((values.usernameEmail === userStored.userName || values.email === userStored.email) && values.password === userStored.password ){
            message.success('LogIn Successfull')
            setIsShowDashboard(true)
        }else{
            message.error('Incorrect Credentials!')
        }
        
    }
  };

  const onRegisteration = (values:any) =>{
    const {username,email, password} = values;

      localStorage.setItem('userDetails', JSON.stringify({ userName: username, email, password }));

    setUserDetails({
      userName:username,
      email:email,
      password:password
  })

  message.success('Registeration Successfull');
  setIsLoggedIn(true)
  }

  return (
    <div className={style['main-container']}>
      <div className={clsx(style['text-default'],style['heading-text'])}>
        {isLoggedIn ? 'WELCOME BACK' : 'SIGN UP' }
      
      </div>
      <div className={style['login-text']}>{isLoggedIn ? 'Log into your account' : 'Create an account to continue'}</div>
      <div className={style['login-form']}>
      <Form
      name="normal_login"
      className="login-form"
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={isLoggedIn ? onFinish  : onRegisteration}
    >
      <Form.Item
        label={isLoggedIn ? "Email or Username" : "Email"}
        name={isLoggedIn ? 'usernameEmail' : 'email'}
        className={style['label-text']}
        rules={[{ required: true, message:'This field is required!'}]}
      >
        <Input placeholder={isLoggedIn ? 'Enter your email or username' : 'Enter your email'} className={style['input-text']}
         />
      </Form.Item>
      {!isLoggedIn && 
      <Form.Item
      label= "Username" 
      name="username"
      className={style['label-text']}
      rules={[{ required: true, message: 'This field is required!' }]}
      >
        <Input placeholder="Choose a preferred username" className={style['input-text']}/>
      </Form.Item> }
  
      <div>
      <Form.Item
        name="password"
        className={style['label-text']}
        rules={[{ required: true, message: 'This field is required!' }]}
      >
        <div>
        <div className={style['wrapper']}>
        <div className={style["password-label"]}>
            Password
        </div>
        {isLoggedIn && <div className={style["login-form-forgot"]}>
          Forgot password?
        </div>}
         
        </div>
        <Input.Password
          type="password"
          placeholder={isLoggedIn ? "Enter your password" : "Choose a strong password" }
          className={style['input-text']}
          
        />
        </div>    
      </Form.Item>
      </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={style['login-form-button']}>
          {isLoggedIn ? 'Log in' : 'Continue'}
        </Button>
      </Form.Item>

      <Form.Item>
        <div className={style['registeration-text']} onClick={handleLogIn}>
          {isLoggedIn ? 'Not registered yet? Register →': 'Already have an account? Login →' }
        </div>    
      </Form.Item>

    </Form>
    </div>
      </div>
  )
}

export default FormComponent