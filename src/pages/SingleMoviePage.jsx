import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";

function SingleMoviePage() {

    const { slug } = useParams()
    const [movie, setMovie] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    useState(() => {
        axios.get(`${backendUrl}/movies/${slug}`).then((resp) => {
            console.log(resp);
            setMovie(resp.data.data);
        })
    }, []);

    return (
        <>
            {movie && (
                <>
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
                </>
            )}
        </>
    )
}

export default SingleMoviePage;