
import React, { useState } from "react";
import Background from "./component/Background/Background";
import NavBar from "./component/NavBar/NavBar";
import Hero from "./component/Hero/Hero";
import './index.css';



const App = () => {

  let heroData = [
    {text1: "Dive into", text2: "what you love"},
    {text1: "Indulge", text2: "your passions"},
    {text1: "Give in to",text2: "your passions"},
  ]

const [heroCount, setHeroCount] = useState(2);
const  [playStatus, setPlayStatus]= useState(false);


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>

      <NavBar />

        <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount }
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />

    </div>
  );
};

export default App;