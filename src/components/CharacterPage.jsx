import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterPage = () => {
    const [character, setCharacter] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        };

        fetchCharacter();
    }, [id]);

    return (
        <div>
            {character ? (
                <section className="relative isolate overflow-hidden min-h-lvh bg-black px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <figure className="mt-10">
                            <h2 className="text-center text-xl font-semibold leading-8 text-gray-200 sm:text-2xl sm:leading-9">
                                <p>{character.name}</p>
                            </h2>
                            <figcaption className="mt-10">
                                <img
                                className="mx-auto w-100 rounded-lg"
                                src={character.image}
                                alt={`image of ${character.name}`}/>
                                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                    <div className="font-semibold text-gray-100">{character.gender}</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="text-gray-200">{character.species}</div>
                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <div className="font-semibold text-gray-200">{character.status}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    
    );
}
