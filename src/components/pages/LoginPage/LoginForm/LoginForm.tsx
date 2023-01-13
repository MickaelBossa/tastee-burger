import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [inputValue, setInputValue] = useState<string>('');

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate(`order/${inputValue}`);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <input
                type="text"
                required
                placeholder="Entrez votre prénom"
                onChange={handleChange}
                value={inputValue}
            />
            <button aria-label="Accéder à votre espace">
                Accédez à votre espace
            </button>
        </form>
    );
}
