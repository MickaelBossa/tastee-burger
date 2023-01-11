import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div>
            <h1>ErrorPage</h1>
            <button>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    Retourner à la page d'accueil
                </Link>
            </button>
        </div>
    );
}
