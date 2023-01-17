import BackButton from '../../../ui/BackButton/BackButton';

export default function ErrorPage() {
    return (
        <div>
            <h1>ErrorPage</h1>
            <BackButton
                buttonLink="/"
                buttonText="Retourner à la page d'accueil"
            />
        </div>
    );
}
