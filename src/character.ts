import { HeroClassType, IHeroClass, getHeroClass } from "./heroClasses";
import { IRace } from "./heroRaces";

export default class Character {
  id: number;
  name: string;
  heroClass?: IHeroClass;
  race?: IRace;
  level?: number;

  constructor(name: string, heroClassType?: HeroClassType) {
    this.id = 1;
    this.name = name;
    if (heroClassType) {
      this.heroClass = getHeroClass(heroClassType);
    }
  }

  shout = () => {
    return this.heroClass?.shout(this.name);
  };
}

// Maybe move this stuff to some sort of "CharacterQuery" module or something
export interface CharacterRecord {
  id: number;
  name: string;
  heroClass: HeroClassType;
  race: string;
}

const listRows = (rows: Array<CharacterRecord>) => {
  // console.log(rows);
};

const doShout = (rows: Array<CharacterRecord>) => {
  rows.forEach((row) => {
    const char = new Character(row.name, row.heroClass);
    char.shout();
  });
};

export async function fetchChars() {
  return fetch("/data/test.json")
    .then((response) => response.json())
    .then((result) => result.characters);
}

export const fetchAllCharacters = (func: any) => {
  fetch("/data/test.json")
    .then((response) => response.json())
    .then((result) => func(result.characters));
};

// THis is 100% async. Good to know.
// So maybe this requires a different way of thinking - I don't go get a bunch
// of results from the database, return them and do something else; we're just
// going to provide a function to run against all of the results it finds.
export const listCharacters = () => {
  fetchAllCharacters(listRows);
  fetchAllCharacters(doShout);
};
