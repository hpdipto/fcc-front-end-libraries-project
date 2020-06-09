import React from 'react';
import './App.css';


const formatForLeadingZero = (number) => {
  if(number < 10) {
    return "0"+number.toString();
  }
  return number;
}



const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);

  const [timerState, setTimerState] = React.useState(false);

  const [breakTime, setBreakTime] = React.useState(5 * 60);
  const [sessionTime, setSessionTime] = React.useState(25 * 60);

  const [beepAudio, setBeepAudio] = React.useState(false);


  const reset = () => {
    setBreakLength(5);
    setSessionLength(25);

    setTimerState(false);

    setBreakTime(5*60);
    setSessionTime(25*60);

    var audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }

  const breakDecrement = () => {
    var bd = breakLength - 1;
    if(bd !== 0) {
        setBreakLength(bd);
        setBreakTime(bd * 60);
    }
  }

  const breakIncrement = () => {
    var ib = breakLength + 1;
    if(ib <= 60) {
        setBreakLength(ib);
        setBreakTime(ib * 60);
    }
  }

  const sessionDecrement = () => {
    var sd = sessionLength - 1;
    if(sd !== 0) {
        setSessionLength(sd);
        setSessionTime(sd * 60);
    }
  }

  const sessionIncrement = () => {
    var si = sessionLength + 1;
    if(si <= 60) {
        setSessionLength(si);
        setSessionTime(si * 60);
    }
  }

  const startStop = () => {
    timerState ? setTimerState(false) : setTimerState(true);
  }

  
  // useEffect was the necessary hook and we calculate completely using seconds
  React.useEffect(() => {
    const sessionSeconds = timerState && (sessionTime > -1) && setInterval(() => setSessionTime(sessionTime-1), 1000);
    const breakSeconds = timerState && (sessionTime < 0) && breakTime && setInterval(() => setBreakTime(breakTime-1), 1000);

    // if both sessionTime and breakTime finish, restart the clock
    if((sessionTime <= 0) && (breakTime <= 0)) {
        setSessionTime(sessionLength * 60);
        setBreakTime(breakLength * 60);
    }

    if((sessionTime <= 0 && !beepAudio) || (breakTime <= 0 && beepAudio)) {
        beepAudio ? setBeepAudio(false) : setBeepAudio(true);
        var audio = document.getElementById('beep');
        audio.play();
    }

    return (() => {
        clearInterval(sessionSeconds);
        clearInterval(breakSeconds);
    });
  });



  return (
    <div>
      <Break breakLength={breakLength} onDecrement={breakDecrement} onIncrement={breakIncrement}/>
      <br />
      <Session sessionLength={sessionLength} onDecrement={sessionDecrement} onIncrement={sessionIncrement}/>
      <br />
      {(sessionTime >= 0) ? 
        <Timer title={"Session"} timerMinute={Math.floor(sessionTime/60)} timerSecond={sessionTime%60} onReset={reset} onStartStop={startStop}/>
        :
        <Timer title={"Break"} timerMinute={Math.floor(breakTime/60)} timerSecond={breakTime%60} onReset={reset} onStartStop={startStop}/>
      }
      
    </div>
  );
}



const Break = ({breakLength, onDecrement, onIncrement}) => {

  return (
    <div>
      <div id="break-label">Break Length</div>
      <button type="button" id="break-decrement" onClick={onDecrement}>-</button>
      <div id="break-length">{breakLength}</div>
      <button type="button" id="break-increment" onClick={onIncrement}>+</button>
    </div>
  );
}


const Session = ({sessionLength, onDecrement, onIncrement}) => {

  return (
    <div>
      <div id="session-label">Session Length</div>
      <button type="button" id="session-decrement" onClick={onDecrement}>-</button>
      <div id="session-length">{sessionLength}</div>
      <button type="button" id="session-increment" onClick={onIncrement}>+</button>
    </div>
  );
}


const Timer = ({title, timerMinute, timerSecond, onReset, onStartStop}) => {

  return (
    <div>
      <div id="timer-label">{title}</div>
      <div id="time-left">{formatForLeadingZero(timerMinute)}:{formatForLeadingZero(timerSecond)}</div>
      <button type="button" id="start_stop" onClick={onStartStop}>StartStop</button>
      <button type="button" id="reset" onClick={onReset}>Reset</button>
      <audio id="beep"preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
    </div>
  );
}


export default App;
