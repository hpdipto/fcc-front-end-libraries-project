import React from 'react';
import logo from './logo.svg';
import './App.css';


const storage = {
  Q: {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  W: {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  E: {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  A: {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  S: {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  D: {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  Z: {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  X: {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  C: {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
};





const App = () => {

  const [displayText, setDisplayText] = React.useState('');

  const playQ = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.Q.id);
  };

  const playW = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.W.id);
  };

  const playE = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.E.id);
  };

  const playA = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.A.id);
  };

  const playS = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.S.id);
  };

  const playD = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.D.id);
  };

  const playZ = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.Z.id);
  };

  const playX = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.X.id);
  };

  const playC = () => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(storage.C.id);
  };

  const press = (event) => {

    if(event.key === 'q') {
      playQ();
    }
    if(event.key === 'w') {
      playW();
    }
    if(event.key === 'e') {
      playE();
    }
    if(event.key === 'a') {
      playA();
    }
    if(event.key === 's') {
      playS();
    }
    if(event.key === 'd') {
      playD();
    }
    if(event.key === 'z') {
      playZ();
    }
    if(event.key === 'x') {
      playX();
    }
    if(event.key === 'c') {
      playC();
    }
  }



  return (
    
    <div id="drum-machine">
      <Display text={displayText} />

      {window.addEventListener('keydown', press)}
      <Key keyId={"Q"} keyValue={"Q"} audioSource={storage.Q.url} playSound={playQ}/>
      <Key keyId={"W"} keyValue={"W"} audioSource={storage.W.url} playSound={playW}/>
      <Key keyId={"E"} keyValue={"E"} audioSource={storage.E.url} playSound={playE}/>
      <Key keyId={"A"} keyValue={"A"} audioSource={storage.A.url} playSound={playA}/>
      <Key keyId={"S"} keyValue={"S"} audioSource={storage.S.url} playSound={playS}/>
      <Key keyId={"D"} keyValue={"D"} audioSource={storage.D.url} playSound={playD}/>
      <Key keyId={"Z"} keyValue={"Z"} audioSource={storage.Z.url} playSound={playZ}/>
      <Key keyId={"X"} keyValue={"X"} audioSource={storage.X.url} playSound={playX}/>
      <Key keyId={"C"} keyValue={"C"} audioSource={storage.C.url} playSound={playC}/>
    </div>
  );
}


const Key = ({keyId, keyValue, audioSource, playSound}) => {

  return (
    <div>
      <button id={keyId} className="drum-pad" onClick={playSound}>{keyValue}</button>
      <audio id="audio" src={audioSource}/>
    </div>
  );
}


const Display = ({text}) => {

  return (
    <div id="display">
      {text}
    </div>
  );
}


export default App;
