import { useParams } from 'react-router-dom';
import BackButton from '../../../ui/BackButton/BackButton';
import Logo from '../../../ui/Logo/Logo';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <div>
            <Logo />
            <h1>Bonjour {username}</h1>
            <BackButton buttonLink="/" buttonText="Déconnexion" />
        </div>
    );
}
