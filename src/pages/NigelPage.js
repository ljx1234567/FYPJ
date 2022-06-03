import React, { useState, useEffect } from 'react';

function Nigel() {
  const [data, getData] = useState([])
  const URL = 'https://nh7shdbjz5.execute-api.ap-southeast-1.amazonaws.com/dev/';

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
          <h1>Display JSON data in React JS</h1>
          <p>Message: {data.message}</p>
      </div>
  );
  }
  
  export default Nigel;
