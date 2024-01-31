import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"


const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getRandomDecription() {
  return reactDescriptions[getRandomNumber()];
}

export default function Header() {
    const description = getRandomDecription();
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }