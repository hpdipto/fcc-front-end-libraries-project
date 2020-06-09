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

  const play = (id) => {
    var audioURL = `storage.${id}.url`;
    var displayTextValue = eval(`storage.${id}.id`);

    var audio = document.getElementById(id).children[0];
    audio.play();

    setDisplayText(displayTextValue);
  };


  const press = (event) => {

    play(event.key.toUpperCase());
  }



  return (
    
    <div id="drum-machine">
      <Display text={displayText} />

      {window.addEventListener('keydown', press)}
      <Key keyId={"Q"} audioSource={storage.Q.url} playSound={play} />
      <Key keyId={"W"} audioSource={storage.W.url} playSound={play} />
      <Key keyId={"E"} audioSource={storage.E.url} playSound={play} />
      <Key keyId={"A"} audioSource={storage.A.url} playSound={play} />
      <Key keyId={"S"} audioSource={storage.S.url} playSound={play} />
      <Key keyId={"D"} audioSource={storage.D.url} playSound={play} />
      <Key keyId={"Z"} audioSource={storage.Z.url} playSound={play} />
      <Key keyId={"X"} audioSource={storage.X.url} playSound={play} />
      <Key keyId={"C"} audioSource={storage.C.url} playSound={play} />
    </div>
  );
}


const Key = ({keyId, keyValue, audioSource, playSound, text}) => {

  return (
    <div>
      <button id={keyId} className="drum-pad" onClick={() => playSound(keyId)}>
        {keyId}
        <audio id={keyId} className="clip" src={audioSource}/>
      </button>
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
