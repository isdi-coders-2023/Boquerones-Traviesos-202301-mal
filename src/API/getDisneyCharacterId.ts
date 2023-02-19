const getDisneyCharaterID = async (id: string | undefined) => {
  const response = await fetch(`https://api.disneyapi.dev/characters/${id}`);
  const character = await response.json();
  return character;
};

export default getDisneyCharaterID;
