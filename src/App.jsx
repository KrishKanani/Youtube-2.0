import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

//We can export all the files in folder like this by creating and index.js file in the folder and exporting all as default.
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
// import Navbar from "./components/Navbar";
// import Feed from "./components/Feed";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <div>
      <Router>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </Router>
    </div>
  );
};

export default App;
