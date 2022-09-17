import { useState } from "react";
import Helmet from "react-helmet";

//import styles from "./mscle.module.css";
const fetch = require('cross-fetch');
import { ArrowRightIcon } from '@heroicons/react/24/solid'

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
        <><div className="flex flex-col justify-center h-screen items-center bg-backgroundColor" >
            <form onSubmit={handleSubmit}>
                <div className="container h-screen flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute top-4 left-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>

                        </div>
                        <input type="text"
                               className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                               placeholder="Search Mscle..." />
                            <div className="absolute top-2 right-2">

                                <button className="h-10 w-20 text-buttonText rounded-lg bg-button focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform hover:animate-pulse">
                                    Go
                                </button>

                            </div>
                    </div>
                </div>
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