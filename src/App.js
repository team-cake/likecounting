import React from "react";
import LikeCounter from "./components/LikeCounter";
import LikeButton from "./components/LikeButton";
import Title from "./components/Title";
import AwesomeAnimals from "./components/AwesomeAnimals"
import ArticleList from "./components/ArticleList"

function App() {
  return (
    <div>
      <main>
        <Title content="Some Simple Like Counter" />
        <LikeCounter />
        <LikeButton />
        <AwesomeAnimals />
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
