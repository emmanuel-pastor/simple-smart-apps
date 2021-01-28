import Navbar from "./components/nav/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createLocalDataStore from "./data/LocalDataStore";
import {AppPageContextProvider} from "./components/app-page/AppPageContext";

function App() {
    const localStore = createLocalDataStore(navigator.language)

    return (
        <>
            <Router basename={'simple-smart-apps'}>
                <Navbar/>
                <Switch>
                    {localStore?.map((appInfo) => (
                        <Route key={appInfo.id} path={appInfo.navigation_path} component={() => AppPageContextProvider(appInfo)}/>
                    ))}
                </Switch>
            </Router>
        </>
    );
}

export default App;
