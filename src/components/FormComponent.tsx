import React, { useState } from 'react'
import style from './formCompoent.module.scss'
import clsx from 'clsx';
import { Button, Form, Input } from 'antd';

const FormComponent = () => {

  const [userDetails, setUserDetails] = useState([{
    userName:'',
    email:'',
    password:''
  }]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () =>{
    setIsLoggedIn(!isLoggedIn); 
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setIsLoggedIn(true);
  };

 

  const onRegisteration = (values:any) =>{
    const {username,email, password} = values;
   
    setUserDetails((ele:any)=>({
      ...ele,
      userName:username,
      email:email,
      password:password
    }))

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
        <Input placeholder={isLoggedIn ? 'Enter your email or username' : 'Enter your email'} className={style['input-text']}/>
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