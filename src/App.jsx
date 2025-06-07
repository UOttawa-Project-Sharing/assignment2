import './App.css'
import NavigatorBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import {BrowserRouter, Link, Routes, Route} from "react-router";
import MembershipPage from "./pages/Memberships.jsx";
import ProgramsPage from "./pages/Programs.jsx";
import TrainersPage from "./pages/Trainers.jsx";

const About = () => {
    return (<>
        <h1>About</h1></>);
};

const NotFoundPage = () => {
    return (<div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Home Page</Link>
    </div>);
}

// const router = createBrowserRouter([
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "*", element: <NotFoundPage /> }
// ]);

function App() {
    // const location = useLocation();
    return (<>
        {/*<RouterProvider router={router} />*/}
        <BrowserRouter basename={"/seg3525-assignment2/"}>
            <NavigatorBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/programs" element={<ProgramsPage/>}/>
                <Route path="/trainers" element={<TrainersPage/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/memberships" element={<MembershipPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App
