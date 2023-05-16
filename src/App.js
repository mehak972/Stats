import React,{useState} from 'react';
import './App.css';
import Questions from './data.json';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Tooltip } from '@mui/material';

function App() {
 const[currentQuestion,setCurrentQuestion]=useState(0)
 const maxQuestions=3;
 const marks = [
  {value: 0, label: 'Strongly Disagree'},
  {value: 25, label: 'Disagree'},
  {value: 50,label: 'Neutral'},
  {value: 75,label: 'Agree'},
  {value:100,label:'Strongly Agree'}
];

 const changeQuestion=()=>{
  
  if (currentQuestion<Questions.length-1){
    setCurrentQuestion(currentQuestion+1)
  }
  else {}
 }

 const previousQuestion = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion(currentQuestion - 1);
  }else{}
};

 const valuetext=(value)=> {
  return `${value}`;
}

const valueLabelFormat=(value)=> {
  return marks.findIndex((mark) => mark.value === value) + 1;
}
const ValueLabelComponent = (props) => {
  const { children, open, value } = props;
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={`${value}%`}>
          {children}
        </Tooltip>
    );
}

return (
    <div className="container">
      <div id="home" className="flex-center flex-column">
      <h1>Personality Test</h1>
      <div id="Qnumber">
        <div id="Qnumber-item">
        <p  id="progressText" className='Qnumber-prefix'>
          Idealistic {currentQuestion+1}/{Questions.length}
        </p>
        <div id="progressBar">
        <div id='progressBarFull' style={{width:`${((currentQuestion+1)/maxQuestions)*100}%`}}></div>
        </div>
      
        </div>
      </div>
      
      <h2 id="question">{Questions[currentQuestion].question}</h2> 

      <Box sx={{ width:"80rem" }}>
         <Slider
        aria-label="Restricted values"
        defaultValue={0}
        valueLabelFormat={valueLabelFormat}
        ValueLabelComponent={ValueLabelComponent}
        getAriaValueText={valuetext}
        step={null}
        onChange={changeQuestion}
        marks={marks}
      />
    </Box>
 
    <div className="button-container">
          <button className="button1" onClick={previousQuestion}>
            Previous
          </button>
          <button className="button2" onClick={changeQuestion}>
            Next
          </button>
        </div>
       </div>
     </div>
  );
}

export default App;
