import React from "react";
import { CharacterList } from "./CharacterList";
import { CharacterPage } from "./CharacterPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterPage />} />
            </Routes>
        </BrowserRouter>
    );
}
