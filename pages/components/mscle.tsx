import { useState } from "react";
import Helmet from "react-helmet";

import styles from "./mscle.module.css";
const fetch = require('cross-fetch');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bb95b52accmsh6b99c5732ebfb70p16813ejsn3dd576dca84d',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
};

// https://api-ninjas.com/api/exercises

// TODO: 
// - text input for muscle group
// - return one exercise from that group, display difficulty, maybe some other info
// - button to get another exercise
// - button to delete the current excersice (states, take example from old project)

function Mscle() {
    const [word, setWord] = useState("");
    const [muscle] = useState("");
    const [words, setWords] = useState<string[]>();

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': ''
        }
      };

    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`;

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(url, options)
            const data = await response.json();

            setWords(data?.name);
        } catch (error) {

        }
    }

    return (
        <><div>
            <form onSubmit={handleSubmit}>
                <input
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