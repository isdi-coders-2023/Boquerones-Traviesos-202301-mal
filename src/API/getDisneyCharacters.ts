import Character from '../Store/types/character';

const getDisneyCharacters = async () => {
  const response = await fetch(`https://api.disneyapi.dev/character?films`);
  const characters = await response.json();

  const charactersInfo: [] = characters.data;
  const charactersList: Character[] = [];
  for (let characterObject of charactersInfo) {
    const { _id, name, imageUrl, films, tvShows } = characterObject;

    const character: Character = {
      id: _id,
      name: name,
      imageUrl: imageUrl,
      films: films,
      tvShows: tvShows,
    };
    charactersList.push(character);
  }
  const smallerCharacters = charactersList.slice(0, 20);
  return smallerCharacters;
};

export default getDisneyCharacters;
