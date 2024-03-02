import React, { useEffect, useState } from "react";

export const App = () => {
    const [characterData, setCharacterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // state track current page number

    const fetchCharacterData = async (page) => {
        const api = `https://rickandmortyapi.com/api/character?page=${page}`;
        try {
            const response = await fetch(api);
            const responseData = await response.json();
            setCharacterData(responseData.results); 
        } catch (error) {
            console.error('Error fetching character data:', error);
        }
    }

    useEffect(() => {
        fetchCharacterData(currentPage); // first page data
    }, [currentPage]);

    const handleLoadMore = (isNext) => {
        if (isNext) {
            setCurrentPage(currentPage + 1); // change to next page number
        } else {
            setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
        }
    }

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Main characters in the "Rick & Morty" Series</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {/* information */}
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {characterData.map(character => (
                        <li key={character.id}>
                            <a href="" className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={character.image} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{character.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{character.species}</p>
                                    <p className={`text-sm font-semibold leading-6 ${character.status === "Alive" ? 'text-teal-600' : character.status === "Dead" ? 'text-red-600' :'text-black-600'}`}>{character.status}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                    <button onClick={() => handleLoadMore(false)} className="px-4 py-2 mx-auto font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent">
                        Previous page
                    
                </button>
                <button onClick={() => handleLoadMore(true)} className="px-4 py-2 mx-auto font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent">
                     Next page
                 </button>
                </ul>
            </div>
        </div>
    );
}


// export const App = () => {
//     // ... (other code remains the same)

//     return (
//         <div className="bg-white py-24 sm:py-32">
//             {/* ... (other JSX code remains the same) */}
//             <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
//                 {/* ... (characterData mapping code remains the same) */}
//                 
//             </ul>
//         </div>
//     );
// }
