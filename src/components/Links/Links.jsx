import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';

let Links = () => {
  const { logos } = useContext(UserContext);

  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(['github', 'linkedin']);
  }, [])

  return (
    <div name="contact" className="App-Links-container">
      {links.map(item => (
        <a key={item} className="App-Links-link" href={logos[item][1]} target="_blank" rel="noopener noreferrer">
          <img className="App-Links-image" src={'/images/' + logos[item][0]} alt={logos[item][1] + " logo"} />
        </a>
      ))}
    </div>
  );
};

export default Links;