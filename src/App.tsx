import React from "react";

import { CharacterList } from "./CharacterList";
import { listCharacters } from "./character";

listCharacters();

function App() {
  return (
    <div className="App">
      <CharacterList />
    </div>
  );
}

export default App;
