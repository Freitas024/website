import Lottie from "react-lottie";
import constructionPage from "../assets/Lottie/construction-page.json";

export default function Animationux() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: constructionPage,
  };

  return <Lottie options={defaultOptions} width={300} height={300} />;
}
