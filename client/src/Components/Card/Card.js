import './Card.css';
import person from './256_rsz_florian-perennes-594195-unsplash.jpg';

const Card = () => {
    return (
        <div className="card">
            <img alt="Foto de perfil" src={person} />
            <div className="name">Cristian</div>
            <span className="tag">Calistenia</span>
            <span className="tag">Running</span>
            <p>Me llamo cristian y este es mi perfil</p>
            <button>Ver workouts</button>
        </div>
    );
};

export default Card;