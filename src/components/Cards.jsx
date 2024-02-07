import React, { useState, useEffect } from "react";
import "./Cards.css"; // Import CSS file for styling

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="line"></div>
        <div className="header">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <h1 className="head">The Rick and Morty API</h1>
      </div>
      <div className="character-container">
  {filteredCharacters.map((character) => (
    <div key={character.id} className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-image"
      /> 
        <h2 className="character-name">{character.name}</h2>
        <p className="character-info">Status: <span>{character.status}</span></p>
        <p className="character-info">Species: <span>{character.species}</span></p>
    </div>
  ))}
</div>
    </div>
  );
};

export default CharacterList;
