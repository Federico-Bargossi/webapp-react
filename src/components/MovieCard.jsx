function MovieCard({ movie }) {
    return (
        <div className="card h-100">
            <img src={`http://localhost:3002/images/${movie.image}`} className="card-img-top" alt={`Immagine del film ${movie.title} non trovata`} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title} <br /> {movie.director}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <a href="#" className="btn btn-primary">Mostra dettagli</a>
                </div>
        </div>
    )
}

export default MovieCard;