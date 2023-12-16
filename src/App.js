// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const [ mode,setMode ]=useState('light');
  const toggleMode=()=>{
     if(mode==='light')
     {
        setMode('dark') 
        document.body.style.backgroundColor='grey'  ;   
     }
     else{
      setMode('light')
      document.body.style.backgroundColor='white' ;    

     }
  }
  const pageSize=8;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [ progress,setProgress ]=useState(0)
    return (
      <div>
        <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <LoadingBar
        color='#f11946'
        progress={progress} style={{height:"3px"}}
      />
        <Routes>
          <Route path="/" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general" />}/>
          <Route path="/business" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route path="/general" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>


        </Routes>
        </BrowserRouter>
      </div>
    )
  }
export default App;


