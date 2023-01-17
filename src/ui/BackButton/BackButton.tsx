import { Link } from 'react-router-dom';

export default function BackButton({
    buttonText,
    buttonLink,
}: {
    buttonText: string;
    buttonLink: string;
}) {
    return (
        <Link to={buttonLink}>
            <button>{buttonText}</button>
        </Link>
    );
}
