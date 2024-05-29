import Lottie from "react-lottie";
import burguerMenu from "../assets/Lottie/burguer_menu.json";

export default function Animationux() {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: burguerMenu,
  };

  return <Lottie options={defaultOptions} width={48} height={48} />;
}
