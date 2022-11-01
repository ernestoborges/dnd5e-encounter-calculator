export function CharactersToShare(inputs) {
  return inputs
    .filter((item) => item.xp === true)
    .map((item) => item.players)
    .reduce((a, b) => a + b, 0);
}
