import React from 'react';
import HeaderComponent from "./components/views/core-components/header.component";
import FooterComponent from "./components/views/core-components/footer.component";
import MainRouterComponent from "./components/views/core-components/main-router.component";
import './App.scss';

function App() {
    return (
        <div className="App">
            <HeaderComponent />
            <main id="content">

                <MainRouterComponent />
            </main>
            <FooterComponent />
        </div>
    );
}

export default App;
