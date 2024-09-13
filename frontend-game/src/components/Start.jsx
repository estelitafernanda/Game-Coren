import { useEffect, useRef, useState } from "react";
import 'animate.css';
import "../app.css";
import imgLogo from '../assets/logo_coren.png';

export default function Start({ setUsername, setUserState}) {
  const inputRefName = useRef();
  const inputRefState = useRef();

  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const backgroundColors = ["white", "yellow"];

  useEffect(() => {
    inputRefName.current.focus();
    inputRefState.current.focus();

    const intervalId = setInterval(() => {
      setBackgroundColorIndex((prevIndex) => (prevIndex + 1) % backgroundColors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  useEffect(() => {
    inputRefName.current.focus();
    inputRefState.current.focus();
  }, []);


  const handleClick = () => {
    const name = inputRefName.current.value.trim();
    const state = inputRefState.current.value.trim();

    if (name && state) {
      setUsername(name);
      setUserState(state);
      setErrorMessage(""); 
    } else {
      setErrorMessage("Por favor, preencha ambos os campos."); 
    }
  };

  const inputStyle = {
    backgroundColor: backgroundColors[backgroundColorIndex],
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping((prevIsFlipping) => !prevIsFlipping);
    }, 5000);

    return () => {
      clearInterval(flipInterval);
    };
  }, []);

  const animationClass = isFlipping ? "animate__flip" : "animate__fadeInDownBig";

  return (
    <>
      <div className="imgLogoEmpresa">
        <video autoPlay loop muted>
          <source type="video/mp4" />
        </video>
        <img src={imgLogo} alt="Logo Coren" />
      </div>
      <div className="start">
      {errorMessage && <div className="caixaerror"><p style={{ marginTop: "20px", marginLeft: "10px",fontSize: "25px"}}>{errorMessage}</p></div>} {}

        <p className={`animate__animated ${animationClass}`}>Teste seus conhecimentos</p>

        <input
          placeholder="Digite o seu nome e sobrenome"
          className="startInput"
          ref={inputRefName}
          style={inputStyle}
          onKeyDown={(e) => {
            if (e.key === "Enter" ) {
              handleClick();
            }
          }}
        />

        <input
          placeholder="Digite seu Estado"
          className="startInput"
          ref={inputRefState}
          style={inputStyle}
          onKeyDown={(a) => {
            if (a.key === "Enter" ) {
              handleClick();
            }
          }}
        />

        <button className="startButton"  onClick={handleClick}>
          Iniciar
        </button>
      </div>
    </>
  );
}
