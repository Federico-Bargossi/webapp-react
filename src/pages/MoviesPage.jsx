import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MoviesPage() {

    const [movies, setMovie] = useState([]);

    //PER FARE LA CHIAMATA AL CARICAMENTO DELLA PAGINA
    useEffect(() => {
        axios.get("http://localhost:3002/movies").then((resp) => {
            console.log(resp);
            setMovie(resp.data.data);
        })
    }, []);

    return (
        <>
            <section>
                <h1>Tutti i film del mondo!</h1>
                <p>Vedi i film che abbiamo preparato per te</p>
            </section>
            <section>
                <h2>Elenco dei libri</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {movies.map((cureMovie) => {
                        return (
                            <div className="col" key={cureMovie.id}>
                                <MovieCard movie={cureMovie} />
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default MoviesPage;