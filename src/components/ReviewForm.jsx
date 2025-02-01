import { useState } from "react";

function ReviewForm() {

    const initialValues = {
        name: "",
        vote: 0,
        text: "",
    }

    const availableVote = Array.from(Array(6).keys());

    const [formData, setFormData] = useState(initialValues);

    const setFielValue = (event) => {
        //prendere value e il campo da cambiare
        const value = event.target.value;
        const fieldName = event.target.name;
        const newFromData = {...formData};
        newFromData[fieldName] = value;
        setFormData(newFromData);
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Nome utente</label>
                <input name="name" value={formData.name} type="text" className="form-control" id="username" onChange={setFielValue} />
            </div>
            <div className="mb-3">
                <label className="" htmlFor="vote">Seleziona il voto</label>
                <select name="vote" className="form-select"  id="vote" onChange={setFielValue} value={formData.vote}>
                    {availableVote.map((cureVote, index) => (
                        <option value={cureVote} key={index}>{cureVote}</option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Testo della recensione</label>
                <input id="text" name="text" className="form-control" type="text" onChange={setFielValue} value={formData.text}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ReviewForm