import React from "react"
import { Route, Routes } from 'react-router-dom'
import { Home } from "./Home"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route path="/home">
                    <Home />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
            </Routes>
        </>
        // component={MyTrips}
    )
}