import "./styles.css";

/*function createObject(first, last, school, gradYear, color) {
  return {
    first: first,
    last: last,
    school: school,
    gradYear: gradYear,
    color: color
  };
}*/
function divDOthings(firstname, lastname, pronouns, graduation, favColor) {
  return (
    <div>
      <b>Name: </b>
      {firstname} {lastname}, <b>pronouns</b>
      {pronouns}, <b>graduation</b>
      {graduation}, <b>favorite Color</b>
      {favColor}
    </div>
  );
}
//{ first + "", last + "", school + "", Gradyear + "", Favcolor + "", FavSocials + "", Favplace + ""}

let hehu = [
  ["Victor", "Lymar", "1923", "Green"],
  ["Tracy", "Siebel", "2022", "Purple"],
  ["Ida", "Voong", "2022", "Blue"],
  ["Aiden", "Siebel", "2023", "red"],
  ["Kyle", "wan", "2023", "yeah"],
  ["Enjun", "Li", "2022", "black"],
  ["Luis", "Garcia", "2025", "black"],
  ["Armanda", "Yu", "2022", "Blue"],
  ["Yifei", "Du", "2022", "Black"],
  ["Hector", "Del Valle", "2022", "Grey"]
];

let divs = [];
for (let i = 0; i < hehu.length; i++) {
  divs.push(divDOthings(hehu[i]));
  divs.push(<br />);
}

export default function App() {
  return (
    <div className="App">
      <h1>Name</h1>

      <h2>Names</h2>
      {divs}
    </div>
  );
}
