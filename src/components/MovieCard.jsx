const backendUrl = import.meta.env.VITE_BACKEND_URL;

function MovieCard({ movie }) {
    return (
        <div className="card h-100">
            <img src={`${backendUrl}/images/${movie.image}`} className="card-img-top" alt={`Immagine del film ${movie.title} non trovata`} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title} <br /> {movie.director}</h5>
                    <p className="card-text">{movie.abstract}</p>
                </div>
        </div>
    )
}

export default MovieCard;