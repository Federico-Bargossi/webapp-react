import { Link } from "react-router-dom";

function HomePage(){
    return (
        <>
        <section>
            <h1>Benvenuto nell app dei film</h1>
            <Link to="/movies" className="btn btn-primary">Vedi tutti i film</Link>
        </section>
        </>
    )
}

export default HomePage;