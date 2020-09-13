import React from 'react';
import { Switch, useLocation } from "react-router-dom";
import Home from 'pages/home/Home';
import Game from 'pages/Game';
import { AnimatePresence } from 'framer-motion';
import MainLayout from 'pages/layouts/MainLayout';


const ApplicationRoutes = () => {     
    const location = useLocation()

    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <MainLayout exact path="/" component={Home} />
                <MainLayout exact path="/game" component={Game} />
            </Switch>
        </AnimatePresence>
    )
}
 
export default ApplicationRoutes;