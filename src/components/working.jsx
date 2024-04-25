import Lottie from 'react-lottie';
import animation from '../assets/Lottie/animationPreview.json';

export default function Workingcat() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation
    }

    return <Lottie options={defaultOptions} width={250} height={250} />
}