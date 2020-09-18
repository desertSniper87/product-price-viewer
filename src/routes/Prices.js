import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Prices = () => {
    const [priceData, setPriceData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [priceInput, setPriceInput] = useState("");
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();

        const tempData = [...priceData];
        tempData.push([textInput, priceInput]);
        setPriceData(tempData);
        setTextInput("");
        setPriceInput("");
    }

    console.table(priceData);

    useEffect(() => {
        if (priceInput < 0) {
            setError(true)
        } else {
            setError(false);
        }

    }, [textInput, priceInput])

    return (
        <div>
            <h1> Prices </h1>
            <Link to="/">Home</Link>
            <form onSubmit={addItem}>
                <label>
                    Item: <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)}></input>
                </label>
                <label>
                    Price: <input type="number" value={priceInput} onChange={(e) => setPriceInput(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"></input>
            </form>
            {error ? <span style = {{color: "red"}}>Error occured</span> : null}
        </div>
    );
}

export default Prices;
