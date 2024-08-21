import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goToDonate = () => navigate('/donate');
    const goToHome = () => navigate('/');
    const goToEvents = () => navigate('/events')

    return { goToDonate, goToHome, goToEvents };
}

export default useCustomNavigate;
