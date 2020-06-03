import React, {useState} from 'react';
import marked from 'marked';
import './App.css';



const App = () => {

  const [text, setText] = useState('');

  const getText = (event) => {
    setText(event.target.value);
  };


  return (
    <div id="app-body">
      <Preview text={text} />
      <Editor handleChange={getText}/>
    </div>
  );
}



const Editor = ({handleChange}) => {

  return (
    <div id="editor-body">
      <h4>Editor</h4>
      <textarea id="editor" onChange={handleChange}></textarea>
    </div>
  );
}



const Preview = ({text}) => {

  return (
    <div id="preview-body">
      <h4>Preview</h4>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}} />
    </div>
  );
}




export default App;
