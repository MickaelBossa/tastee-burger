import { Link } from 'react-router-dom';

export default function BackButton({ buttonText }: { buttonText: string }) {
    return (
        <Link to={'/'}>
            <button>{buttonText}</button>
        </Link>
    );
}
