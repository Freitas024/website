import { Wrapper } from "./styledHeader";
import { Link } from "react-router-dom";
import viux from "../../assets/viux.svg";

export default function Header() {
  return (
    <Wrapper>
      <img src={viux} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </Wrapper>
  );
}
