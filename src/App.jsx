import { useState } from "react";
import react from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import articleImage from "../src/assets/images/illustration-article.svg";
import authorImage from "../src/assets/images/image-avatar.webp";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="cardContainer">
          <img src={articleImage} alt="" className="cardIllustration" />
          <span className="category">Learning</span>
          <p className="datePublished">Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p className="cardDescription">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="authorContainer">
            <img src={authorImage} alt="" className="authorPic" />
            <span className="authorName">Greg Hooper</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
