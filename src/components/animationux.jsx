import Lottie from "react-lottie";
import animationuxui from "../assets/Lottie/animation.json";

export default function Animationux() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationuxui,
  };

  return <Lottie options={defaultOptions} width={350} height={350} />;
}
