// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const [newName,setNewName]=useState([]);
  const getData=()=>{
    fetch('/api'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  const addItem= async () => {
    const rawResponse = await fetch('/api/add/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
    body: JSON.stringify({"name": newName})
    });
    const content = await rawResponse;

    console.log(content);
    getData()
  }




  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.id}{item.priority}{item.name}<button>raise priority</button></p>)
     }
    <input type='text' value={newName} onChange={(e) => (setNewName(e.target.value))} />
    <button onClick={addItem} >add item</button>
    </div>
  );
}

export default App;
