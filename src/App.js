import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#12244a';
      document.body.style.color='white';
      showAlert("Dark Mode Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#12244a';
      showAlert("Light Mode Enabled","success");
    }
  }

  return (
        <>
        <div>
          <Navbar logo="TextUtils" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <TextForm mode={mode} showAlert={showAlert}/>
        </div>
        </>
  );
}

export default App;
