import React, { useState } from 'react';
import './App.css';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");

  const getApiMessage = async () => {

    console.log(process.env.REACT_APP_ENDPOINT);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}hello`, {
      mode: 'cors'
    });
    
    const responseData = await response.text();
    console.log(responseData)

    setShowResult(true);
    setApiMessage(responseData);  
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>CALL AN API</h1>
        <button onClick={getApiMessage}>Call Kinesis Producer</button>
        <button onClick={getApiMessage}>Call DynamoDB Producer</button>
        <button onClick={getApiMessage}>Call SNS Producer</button>
        <button onClick={getApiMessage}>Call SQS Producer</button>
        <div>
          {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </div>
      </header>
    </div>
  );
}

export default App;