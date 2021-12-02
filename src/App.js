import "./styles.css";

function createObject(first, last, school, gradYear, color) {
  return {
    first: first,
    last: last,
    school: school,
    gradYear: gradYear,
    color: color
  };
}

//{ first + "", last + "", school + "", Gradyear + "", Favcolor + "", FavSocials + "", Favplace + ""}

let classRoster = [
  createObject("Victor", "Lymar", "LaunchDarkly", "1923", "Green"),
  createObject("Tracy", "Siebel", "LaunchDarkly", "2022", "Purple"),
  createObject("Ida", "Voong", "Oakland Technical High School", "2022", "Blue"),
  createObject("Ana", "Rivera", "CSU East Bay", "2051", "Green"),
  createObject(
    "Aiden",
    "Siebel",
    "Oakland Technical High School",
    "2023",
    "red"
  ),
  createObject("Kyle", "wan", "Oakland Tech", "2023", "yeah"),
  createObject("Enjun", "Li", "John O' Connell", "2022", "black"),
  createObject("Luis", "Garcia", "CSU East Bay", "2025", "black"),
  createObject("Armanda", "Yu", "Oakland Technical", "2022", "Blue"),
  createObject("Yifei", "Du", "Balboa HS", "2022", "Black"),
  createObject(
    "Hector",
    "Del Valle",
    "John O'Connell High School of Technology ",
    "2022",
    "Grey"
  )
];
console.log(classRoster);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
