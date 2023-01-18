import { useParams } from 'react-router-dom';
import BackButton from '../../../ui/BackButton/BackButton';
import Logo from '../../../ui/Logo/Logo';
import { CgProfile } from 'react-icons/cg';

export default function OrderPage() {
    const { username } = useParams();

    return (
        <div>
            <nav>
                <Logo />
                <h1>Hey, {username}</h1>
                <BackButton buttonLink="/" buttonText="Se déconnecter" />
                <CgProfile
                    style={{ width: '48px', height: '48px', color: 'gray' }}
                />
            </nav>
        </div>
    );
}
