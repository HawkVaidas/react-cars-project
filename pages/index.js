
import style from "../styles/Home.module.css";
import Header from "../components/Header/header";
import Main from "../components/Main/main";
import Footer from "../components/Footer/footer";
import { useState } from "react";


const MainPage = () => {
  const [isDisplayLogo, setDisplayLogo] = useState(true);

  return (
    <>
    <Header isDisplayLogo={isDisplayLogo} 
    />
    <Main/>
    <Footer/>
    </>
  );
};



export default MainPage;