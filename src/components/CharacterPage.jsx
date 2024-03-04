import React, { useEffect, useState } from "react";

export const CharacterPage = ({ match }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Fetch the individual character data based on the ID from the API
        const fetchCharacter = async () => {
            const characterId = match.params.id; // Extract character ID from the URL params
            const api = `https://rickandmortyapi.com/api/character/${characterId}`;
            try {
                const response = await fetch(api);
                const responseData = await response.json();
                setCharacter(responseData); 
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        }

        fetchCharacter(); 
    }, [match.params.id]);

    return (
        <div>
            {character && (
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                    {/* Display other character details as needed */}
                </div>
            )}
        </div>
    );
}
