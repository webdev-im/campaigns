import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// loader
import loader from "./assets/images/loader.svg";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

// screens
import HomeScreen from "./screens/HomeScreen";
import PostCampaignScreen from "./screens/PostCampaignScreen";

// style
import { StyledLoader } from "./globalStyles";
import { StyledApp } from "./globalStyles";

function App() {
  // hooks
  // state
  const [loading] = useState(false);
  return (
    <StyledApp className="App">
      {loading ? (
        <StyledLoader src={loader} alt="loading" />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/post-campaign" element={<PostCampaignScreen />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </StyledApp>
  );
}

export default App;
