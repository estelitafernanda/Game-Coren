import { useEffect, useRef, useState } from "react";
import 'animate.css'

import imgLogo from '../assets/logo_coren.png';
import videoNatal from "../assets/videoNatal.mp4"


export default function Start({setUsername}) {

  const inputRefName = useRef()

  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0)

  const backgroundColors = ["white", "yellow"]

  const [isFlipping, setIsFlipping] = useState(false);


  

  useEffect(() => {
    inputRefName.current.focus();

    const intervalId = setInterval(() => {
      setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    }, 1000);

    return () => clearInterval(intervalId); // Limpar o intervalo quando o componente desmontar
  }, []);

  useEffect(() => {
    inputRefName.current.focus()
  }, [])

  const handleClick = () => {
    inputRefName.current.value && setUsername(inputRefName.current.value) 
  }

  const inputStyle = {
    backgroundColor: backgroundColors[backgroundColorIndex],
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping((prevIsFlipping) => !prevIsFlipping);
    }, 5000); // Define o intervalo de 5 segundos

    return () => {
      clearInterval(flipInterval);
    };
  }, []);

  

  const animationClass = isFlipping ? "animate__flip" : "animate__fadeInDownBig";

  return (
    <>
    <div className="imgLogoEmpresa">
      <video autoPlay loop muted>
        <source src={videoNatal} type="video/mp4" />
      </video>
      <img src={imgLogo} alt="Logo Coren" />
    </div>
    <div className="start">
       <p className={`animate__animated ${animationClass}`}>Teste seus conhecimentos</p>
      <input 
        placeholder="Digite o seu nome e sobrenome" 
        className="startInput"
        ref={inputRefName}
        style={inputStyle}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick()
          }
        }}
      />

      <button className="startButton" onClick={handleClick}>Iniciar</button>
      
    </div>
    </>
  )
}