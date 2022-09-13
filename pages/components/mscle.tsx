import { useState } from "react";
import Helmet from "react-helmet";

import styles from "./mscle.module.css";
const fetch = require('cross-fetch');

const [word, setWord] = useState("");
const [muscle] = useState("");
const [words, setWords] = useState<string[]>();

const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`;

const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
};

const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
        const response = await fetch(url)
        const data = await response.json();

        setWords(data?.name);
    } catch(error) {

    }
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bb95b52accmsh6b99c5732ebfb70p16813ejsn3dd576dca84d',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
};

async function getExercises() {
    const response = await fetch(url, options);
    const data = await response.json();
    const random = Math.floor(Math.random() * data.length);

    console.log(data[random].name);
    console.log(" ----------- ");
    console.log(data[random].difficulty);
}


// https://api-ninjas.com/api/exercises

// TODO: 
// - text input for muscle group
// - return one exercise from that group, display difficulty, maybe some other info
// - button to get another exercise
// - button to delete the current excersice (states, take example from old project)

function Mscle() {
    return (
        <><div>
            <form onSubmit={handleSubmit}>
                <input className={styles.input}
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleData}
                    value={word}>
                </input>
            </form>
        </div>
            <div>
                {words && typeof words === 'string' ? (
                    <p>{words}</p>
                ) : words?.map((word, index) => (
                    <p key={index}> {word} </p>
                ))}
            </div>
        </>
    )
}

export default Mscle;