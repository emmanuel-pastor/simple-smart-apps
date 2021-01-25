import Navbar from "./components/nav/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return (
        <>
            <Router basename={'simple-smart-apps'}>
                <Navbar/>
            </Router>
        </>
    );
}

export default App;
