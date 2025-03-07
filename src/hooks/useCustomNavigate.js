import { useNavigate } from "react-router-dom";

export const useCustomNavigate = () => {
    const navigate = useNavigate();

    const ToGo = (path) => {
        navigate(path);
    }

    return {ToGo}
}