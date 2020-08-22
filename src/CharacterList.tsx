import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { List } from "immutable";

import Character, { CharacterRecord, fetchChars } from "./character";

const CharacterListDiv = styled.div`
  padding: 1rem;
`;

const CharacterCard = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid red;
`;

export const CharacterList: React.FC = () => {
  const [chars, setChars] = useState([]);

  const Characters = () => {
    var divs = List(chars).map((char: CharacterRecord) => {
      var charObject = new Character(char.name, char.heroClass);
      return (
        <CharacterCard key={char.id}>
          {char.name}
          <br />
          Class: {charObject.heroClass?.name}
          <br />
          Shout: {charObject.shout()}
        </CharacterCard>
      );
    });

    return <div>{divs}</div>;
  };

  useEffect(() => {
    fetchChars().then((returnData) => {
      setChars(returnData);
    });
  }, []);

  return (
    <CharacterListDiv>
      <Characters />
    </CharacterListDiv>
  );
};
