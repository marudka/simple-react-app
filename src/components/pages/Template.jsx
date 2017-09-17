import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home.jsx";
import Page2 from "./Page2.jsx";
import Navigation from "./Navigation.jsx";

function Template() {
    return (
        <div>
            <Navigation />
            <main>
                <Route path="/" component={Home} exact />
                <Route path="/page2" component={Page2} />
            </main>
        </div>
    );
}

export default Template;
