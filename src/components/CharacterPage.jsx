import React, { useEffect, useState } from "react";

export const CharacterPage = ({ match }) => {
    const [character, setCharacter] = useState(null);
    const { id } = match.params;

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
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
