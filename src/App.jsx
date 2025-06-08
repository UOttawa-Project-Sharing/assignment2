import './App.css'
import NavigatorBar from "./components/NavBar.jsx";
import Contact from "./pages/Contact.jsx";
import {BrowserRouter, Link, Routes, Route, HashRouter} from "react-router";
import MembershipPage from "./pages/Memberships.jsx";
import ProgramsPage from "./pages/Programs.jsx";
import ProgramPage from "./pages/ProgramPage.jsx";
import TrainersPage from "./pages/Trainers.jsx";
import HomePage from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";
import BookingPage from "./pages/Booking.jsx";
import PaymentPage from "./pages/Payments.jsx";

const NotFoundPage = () => {
    return (
    <div className="container text-center my-5">
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
        <div className="d-flex flex-column min-vh-100">
        <HashRouter>
            <NavigatorBar/>
            <main className="flex-grow-1">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/programs" element={<ProgramsPage/>}/>
                <Route path="/programs/:programName" element={<ProgramPage/>}/>
                <Route path="/trainers" element={<TrainersPage/>}/>
                <Route path="/trainers/:TainerName" element={<TrainerPage/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/memberships" element={<MembershipPage/>}/>
                <Route path="/booking" element={<BookingPage/>}/>
                <Route path="/payment" element={<PaymentPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
            </main>
            <Footer/>
        </HashRouter>
        </div>
    </>)
}

export default App
