import React from "react";
import { CharacterList } from "./CharacterList";
import { CharacterPage } from "./CharacterPage";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <CharacterList />
                </Route>
                <Route path="/character/:id">
                    <CharacterPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
