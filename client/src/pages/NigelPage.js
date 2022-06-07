import React, { useState, useEffect } from 'react';

function Nigel() {
  const [data, getData] = useState([])
  const URL = `${process.env.REACT_APP_TESTING_URL}/dev/`;

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
          <h1>Display JSON data in React JS (Calling API 1)</h1>
          <p>Message: {data.message}</p>
      </div>
  );
  }
  
  export default Nigel;
