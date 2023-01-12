import { useParams } from 'react-router-dom';
import BackButton from '../../BackButton/BackButton';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <div>
            <h1>Bonjour {username}</h1>
            <BackButton buttonText="Déconnexion" />
        </div>
    );
}
