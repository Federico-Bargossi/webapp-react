import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

function SingleMoviePage() {

    const localHost = import.meta.env.VITE_LOCAL_HOST

    const { slug } = useParams()
    const [movie, setMovie] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getMovie = () => {
        axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
            console.log(resp);
            setMovie(resp.data.data);
        })
    }

    useState(() => {
        getMovie();
    }, []);

    const storeReview = (formData) => {
        console.log("submit reviw", movie.id, formData);
        axios.post(`${backendUrl}/movies/${movie.id}/reviews`, formData)
        .then((resp) => {
            console.log(resp);
            getMovie();
        })
    }

    return (
        <>
            {movie && (
                <>
                <Link className="btn btn-primary mb-2 mt-2" to={`${localHost}/movies`} >Torna alla pagine Precendete</Link>
                    <section>
                        <img className="w-50" src={`${backendUrl}/images/${movie.image}`} alt="" />
                        <h1>{movie.title}</h1>
                        <h2>{movie.director}</h2>
                        <p>voto: {movie.vote_avg}</p>
                        <p>Genere: {movie.genre}</p>
                        <p>{movie.abstract}</p>
                    </section>
                    <section>
                        <h3 className="pb-2">Recensioni degli utenti</h3>
                        <div className="row row-cols-1 g-3">
                            {movie.reviews.map((cureReview, index) => <ReviewCard key={index} review={cureReview} />)}
                        </div>
                    </section>
                    <section className="mt-5">
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <h2 className="text-center">Invia una nuova recensione</h2>
                                <ReviewForm onSubmitFuncion={storeReview}/>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default SingleMoviePage;