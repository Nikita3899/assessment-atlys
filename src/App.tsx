import React, { useEffect, useState } from 'react';
import style from './app.module.scss';
import LogInComponent from './components/FormComponent'
import HomePage from './components/HomePage';

function App() {
  const [userDetails, setUserDetails] = useState({
    userName:'',
    email:'',
    password:''
  });

  const [isShowHomePage, setIsShowHomePage] = useState(false)
  return (
    <div className={style["App"]}>
      {isShowHomePage ? (<HomePage userName={userDetails.userName}/>):(
      <LogInComponent setIsShowHomePage={setIsShowHomePage} setUserDetails = {setUserDetails} />
       )}
     
    </div>
  );
}

export default App;