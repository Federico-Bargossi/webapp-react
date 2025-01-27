import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MoviesPage() {

    const [movies, setMovie] = useState([]);
    const [search, setSearch] = useState([]);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;


    const getMovie = () => {
        const params = {}
        if (search.length > 0) {
            params.search = search
        }
        axios.get(`${backendUrl}/movies`, { params }).then((resp) => {
            setMovie(resp.data.data);
        })
    }

    //PER FARE LA CHIAMATA AL CARICAMENTO DELLA PAGINA
    useEffect(() => {
        getMovie()
    }, []);

    return (
        <>
            <section>
                <h1>Tutti i film del mondo!</h1>
                <p>Vedi i film che abbiamo preparato per te</p>
            </section>
            <section>
                <div className="my-4 d-flex">
                    <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" className="form-control" aria-label="Cerca film" placeholder="Cerca un film digitando una parola chiave" />
                    <button onClick={getMovie} className="btn btn-primary ms-2">Cerca</button>
                </div>
                {
                    movies.length > 0 ? (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                            {movies.map((cureMovie) => {
                                return (
                                    <div className="col" key={cureMovie.id}>
                                        <MovieCard movie={cureMovie} />
                                    </div>
                                )
                            })}
                        </div>
                    ):(
                       <div className="alert alert-warning">Non è stato trovato nessun Film</div> 
                    )
                }

            </section>
        </>
    )
}

export default MoviesPage;