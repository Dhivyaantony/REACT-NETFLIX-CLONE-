


/*function Toggle() {
  // Declare a state variable called "isOn" and initialize it to false
  const [isOn, setIsOn] = useState(true);

  // Function to handle toggling the state
  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>Toggle State: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggleState}>{isOn ? 'Turn OFF' : 'Turn ON'}</button>
    </div>
  );
}


  
import { useState } from "react";
  const FirstTenSum = () => {
    // Using the useState hook to manage the sum state
    const [sum, setSum] = useState(0);
  
    // Function to calculate the sum of the first 10 numbers
    const calculateSum = () => {
      let totalSum = 0;
      for (let i = 1; i <= 10; i++) {
        totalSum += i;
      }
      return totalSum;
    };
  
    // Update the sum state using the calculated value
    // We use the useState hook here to set the initial value of the sum.
    useState(() => setSum(calculateSum()));
  
    return (
      <div>
        <h1>Sum of the first 10 numbers:</h1>
        <p>{sum}</p>
      </div>
    );
  };
  
  export default FirstTenSum;*/

  import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1"
    )
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Display or use the fetched data here */}
    </div>
  );
};

export default MyComponent;

/*import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
//axios
const App = () => {
  const [count, setCount] = useState(0);
  const myData = async () => {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    console.log(result, "======result======");
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> incerement</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <h1>{count}</h1>
    </div>
  );
};
export default App;*/

