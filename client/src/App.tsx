import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import About from "./components/About/About";
import Panel from "./components/Admin/Panel";
import Project from "./components/Admin/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Projects from "./components/Projects/Projects";
import { loadUser } from "./slices/userSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUser());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={isAuthenticated ? <Panel /> : <Login />}
        />
        <Route path="/new/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
