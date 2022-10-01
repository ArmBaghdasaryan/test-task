import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cats from "./Pages/Cats/Cats";

const App = ()=> {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Cats />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;