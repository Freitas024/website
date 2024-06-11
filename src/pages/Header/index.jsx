import { useState } from "react";
import { Link } from "react-router-dom";
import viux from "../../assets/viux.svg";
import Lottie from "react-lottie";
import BurguerMenu from "../../assets/Lottie/burguer-menu-02.json";
import { Wrapper } from "./styledHeader";

export default function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);

    setIsAnimation(!isAnimation);
  };

  const options = {
    loop: false,
    autoplay: isAnimation,
    animationData: BurguerMenu,
  };

  return (
    <Wrapper>
      <img src={viux} alt="Logo" />
      <ol>
        <button onClick={handleToggle}>
          <Lottie options={options} width={40} height={40} />
        </button>
        {isToggle && (
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/sobre">Contato</Link>
            </li>
          </ul>
        )}
      </ol>
    </Wrapper>
  );
}
