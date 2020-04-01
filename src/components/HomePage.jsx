
// Package dependencies
import React, { useEffect, useState } from 'react';


// Component
export default function HomePage() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
      .then((response) => response.json())
      .then((result) => {
        setInfo(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>{JSON.stringify(info)}</div>
  );
}
