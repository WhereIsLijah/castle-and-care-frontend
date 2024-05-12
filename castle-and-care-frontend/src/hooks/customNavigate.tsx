import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goToDonate = () => navigate('/donate');
    const goToHome = () => navigate('/');

    return { goToDonate, goToHome };
}

export default useCustomNavigate;
