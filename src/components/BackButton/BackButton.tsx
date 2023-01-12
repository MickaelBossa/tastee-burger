import { Link } from 'react-router-dom';

export default function BackButton({ buttonText }: { buttonText: string }) {
    return (
        <button>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                {buttonText}
            </Link>
        </button>
    );
}
