export default function makeSort(data) {
  data.sort((a, b) => b.health - a.health);
  return data;
}
