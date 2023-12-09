import React from "react";
import "./App.css";
import { HorrorMovies, action, originals, ComedyMovies, Documentaries, RomanceMovies } from './constants/Url';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/rowpost/RowPost";
import LoginForm from './components/Login/Log';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = {
    name: "dhivya",
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/RowPost" element={<RowPost/>} />
          {/* Main Route, only rendered when user is logged in */}
          {user && (
            <Route
              path="/main"
              element={
                <React.Fragment>
                  <Navbar />
                  <Banner />
                  <RowPost url={originals} title='NETFLIX ORIGINALS' />
                  <RowPost url={action} title='ACTION' isSmall />
                  <RowPost url={HorrorMovies} title='HORROR MOVIES' isSmall />
                  <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
                  <RowPost url={RomanceMovies} title='Romance Movies' isSmall />
                  <RowPost url={Documentaries} title='DOCUMENTARIES' isSmall />
                </React.Fragment>
              }
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
