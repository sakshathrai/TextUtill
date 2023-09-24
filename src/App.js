import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {  
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = ()=>{
    
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ='#18181A ';
      document.body.style.color ='rgb(218, 255, 251)';
     showAlert("Dark Mode has been enabled","success"); 
    } 
    else if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor ='#F5F5F5';
      document.body.style.color ='black';
      showAlert("Light Mode has been enabled","success" );
    }
  }
  
  return (
    <>
    {/* <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter the text to Analyze below" mode={mode}/>} />
  <Route exact path="/about" element={<About mode={mode}/>} />
</Routes>
 
          </div>
          </Router> */}
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert}heading="Enter the text to Analyze below" mode={mode}/>
      // <About  mode={mode}/>
          </div>
    </>
  );
  }
export default App;
