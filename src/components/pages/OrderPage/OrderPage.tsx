import { useParams } from 'react-router-dom';
import BackButton from '../../../ui/BackButton/BackButton';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <div>
            <h1>Bonjour {username}</h1>
            <BackButton buttonLink="/" buttonText="Déconnexion" />
        </div>
    );
}
