import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RealmSelect from "./pages/RealmSelect";
import RealmView from "./pages/RealmView";
import NotFound from "./pages/NotFound";
import Tools from "./pages/Tools";
import Result from "./pages/Result";
import Badges from "./pages/Badges";
import Reflect from "./pages/Reflect";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realms" element={<RealmSelect />} />
          <Route path="/realm/:emotion" element={<RealmView />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:emotion/tools" element={<Tools />} />
          <Route path="/:emotion/result" element={<Result />} />
          <Route path="/:emotion/badges" element={<Badges />} />
          <Route path="/reflect" element={<Reflect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
