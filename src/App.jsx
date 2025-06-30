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
import LearnMoreView from "./pages/LearnMoreView";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realms" element={<RealmSelect />} />
          <Route element={<AppLayout />}>
            <Route path="/realm/:emotion" element={<RealmView />} />
            <Route path="/:emotion/tools" element={<Tools />} />
            <Route path="/:emotion/result" element={<Result />} />
            <Route path="/:emotion/badges" element={<Badges />} />
            <Route path="/reflect" element={<Reflect />} />
            <Route path="/:emotion/more" element={<LearnMoreView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
