import React, { useState } from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export function Mscle() {
    const [word, setWord] = useState("");
    const [muscle, setError] = useState("");
    const [words, setWords] = useState<string[]>();

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "",
            "X-RapidAPI-Host": ""
        }
    };

    const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle}`;

    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWord(event.target.value);
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(url, options);
            const data = await response.json();

            const random = Math.floor(Math.random() * data.length);
            setWords(data[random].name);
        } catch (error) {
            // TODO: Handle error
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center h-screen items-center bg-backgroundColor">
                <form onSubmit={handleSubmit}>
                    <div className="container h-screen flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute top-4 left-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                                placeholder="Search Mscle..."
                            />
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
                {words && typeof words === "string" ? (
                    <p>{words}</p>
                ) : (
                    // TODO: Fix errors
                    words?.map((word, index) => (
                        <p key={index}>
                            {" "}
                            {word.name} - {word.muscle}{" "}
                        </p>
                    ))
                )}
            </div>
        </>
    );
}

export default Mscle;