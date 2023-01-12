import { useParams } from 'react-router-dom';
import BackButton from '../../BackButton/BackButton';

export default function OrderPage() {
    const { name } = useParams();

    return (
        <div>
            <h1>Bonjour {name}</h1>
            <BackButton buttonText="Déconnexion" />
        </div>
    );
}
