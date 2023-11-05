import React from 'react';
import style from './app.module.scss';
import appLogo from './assets/Logo.svg'
import LogInComponent from './components/FormComponent'

function App() {
  return (
    <div className={style["App"]}>
      <div className={style['wrapper']}>
      <div className={style['logo']}>
        <img src={appLogo} alt="logo not found"/>
      </div>
      <LogInComponent/>
      </div> 
    </div>
  );
}

export default App;