import React from 'react'
import Navbar from "../components/navbar";
import Home from "../components/home.jsx"
import HomeSecond from "../components/homeSecond.jsx"
import HomeThird from "../components/homeThird.jsx"
import HomeFifth from "../components/homeFifth.jsx";
import HomeSixth from "../components/homeSixth.jsx";
import HomeSeventh from "../components/homeSeventh.jsx";
import HomeFourth from "../components/login.jsx";
import HomeEight from "../components/signup.jsx";

const homePage = () => {
  return (
    <div>
        <Navbar />
      <Home />
      <HomeSecond/>
      <HomeThird/>
      {/* <HomeFifth/> */}
      {/* <HomeSixth /> */}
      <HomeSeventh />
      {/* <HomeFourth/>
      <HomeEight/> */}
    </div>
  )
}

export default homePage