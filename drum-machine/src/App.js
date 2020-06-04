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

  const play = (event) => {
    var audio = document.getElementById('audio');
    audio.play();

    setDisplayText(event);
  };

  const press = (event) => {

    var storageRetrival = `storage.${event.key.toUpperCase()}.id`;
    play(eval(storageRetrival));
  }



  return (
    
    <div id="drum-machine">
      <Display text={displayText} />

      {window.addEventListener('keydown', press)}
      <Key keyId={"Q"} keyValue={"Q"} audioSource={storage.Q.url} playSound={play} text={storage.Q.id}/>
      <Key keyId={"W"} keyValue={"W"} audioSource={storage.W.url} playSound={play} text={storage.W.id}/>
      <Key keyId={"E"} keyValue={"E"} audioSource={storage.E.url} playSound={play} text={storage.E.id}/>
      <Key keyId={"A"} keyValue={"A"} audioSource={storage.A.url} playSound={play} text={storage.A.id}/>
      <Key keyId={"S"} keyValue={"S"} audioSource={storage.S.url} playSound={play} text={storage.S.id}/>
      <Key keyId={"D"} keyValue={"D"} audioSource={storage.D.url} playSound={play} text={storage.D.id}/>
      <Key keyId={"Z"} keyValue={"Z"} audioSource={storage.Z.url} playSound={play} text={storage.Z.id}/>
      <Key keyId={"X"} keyValue={"X"} audioSource={storage.X.url} playSound={play} text={storage.X.id}/>
      <Key keyId={"C"} keyValue={"C"} audioSource={storage.C.url} playSound={play} text={storage.C.id}/>
    </div>
  );
}


const Key = ({keyId, keyValue, audioSource, playSound, text}) => {

  return (
    <div>
      <button id={keyId} className="drum-pad" onClick={() => playSound(text)}>{keyValue}</button>
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
