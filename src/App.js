import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Component3 from "./Component/Component3";
import "./styles.css";

const Compo1 = ({ text }) => {
  return <h1>{text}</h1>;
};

const Compo2 = () => {
  return (
    <>
      <input type="text" placeholder="mobile..." /> <br />
      <br />
      <input type="text" placeholder="password..." /> <br /> <br />
    </>
  );
};

const Compo3 = ({ text }) => {
  return <button> {text} </button>;
};

export default function App() {
  return (
    <div className="App">
      <Compo1 text="Register here ..." />
      <Compo2 />
      <Compo3 text="Submit" />

      <Component1 text="Register here..." />
      <Component2 />
      <Component3 text="Submit" />
    </div>
  );
}
