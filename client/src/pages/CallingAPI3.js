import React, { useState, useEffect } from 'react';

function CallingAPI3() {
  const [data, getData] = useState([])
  const URL = `${process.env.REACT_APP_TESTING_URL}/dev/chain`;
  console.log(process.env)
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData = () => {
      fetch(URL)
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getData(response);
          })

  }

  return (
      <div className='App'>
          <h1>Display JSON data in React JS (Calling API 3)</h1>
          <p>Message: {data.message}</p>
      </div>
  );
  }
  
  export default CallingAPI3;
