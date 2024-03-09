import React from "react";
// import Example from "./Example.jsx"
// import Accordian from "./Accordian.jsx";
// import RandomColorGenerator from "./RandomColorGenerator.jsx"
// import LoadMore from "./LoadMore.jsx";
// import Nav from "./ReactProject1/Nav.jsx"
// import Hero from "./ReactProject1/Hero.jsx"
// import Analytics from "./ReactProject1/Analytics.jsx";
// import Email from "./ReactProject1/Email.jsx";
// import Card from "./ReactProject1/Card.jsx";
// import Footer from "./ReactProject1/Footer.jsx"
// import { FaOtter } from "react-icons/fa6";


import Nav from "./internproject/Nav.jsx";
import PercentageColorViewer from "./internproject/PercentageColorViewer.jsx";
import HeroNewSubComponent from "./internproject/HeroNewSubComponent.jsx";
import TradingViewWidget from "./internproject/TradingViewWidget.jsx";
import Cryptocurrencies from "./internproject/Cryptocurrencies.jsx";
import AboutBitcoin from "./internproject/AboutBitcoin.jsx";
import Team from "./internproject/Team.jsx";
import Tokenomics from "./internproject/Tokenomics.jsx";
import YouMaylike from "./internproject/YouMaylike.jsx";
import Converter from "./internproject/Converter.jsx";
import TrendingCoins from "./internproject/TrendingCoins.jsx"
import Sentiment from "./internproject/Sentiment.jsx";
import Fundamentals from "./internproject/Fundamentals.jsx";


function App(){

  return(<>
    <Nav></Nav>
    <Cryptocurrencies></Cryptocurrencies>
    <Converter></Converter>
   
    <div className="w-full mt-3 px-6">
      
      <div className="flex justify-around items-center max-w-[1440px] m-auto md:gap-3">
    <div className="w-[990px]"><TradingViewWidget></TradingViewWidget></div>
    <div className="flex flex-col gap-4 items-center">
    <div><HeroNewSubComponent></HeroNewSubComponent></div>
    <div><TrendingCoins></TrendingCoins></div>
    </div>
     </div>
    </div>
    <Fundamentals></Fundamentals>
    <Sentiment></Sentiment>
    <AboutBitcoin></AboutBitcoin>
    <Tokenomics></Tokenomics>
    <Team></Team>
    <YouMaylike></YouMaylike>
          </>);
  
  }
export default App