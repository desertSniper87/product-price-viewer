import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Prices = () => {
    const [priceData, setPriceData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [priceInput, setPriceInput] = useState("");

    const addItem = (e) => {
        e.preventDefault();

        const tempData = [...priceData];
        tempData.push([textInput, priceInput]);
        setPriceData(tempData);
        setTextInput("");
        setPriceInput("");
    }

    console.table(priceData);

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
        </div>
    );
}

export default Prices;
