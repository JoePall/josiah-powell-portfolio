import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AdditionalProjects from "./pages/AdditionalProjects";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Paper from "@material-ui/core/Paper";

function App() {
  return (
    <Container fluid="lg" className="m-5  mx-auto">
      <Paper className="p-5" elevation={10}>
        <Header />
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/Projects" component={Projects} />
            <Route
              exact
              path="/AdditionalProjects"
              component={AdditionalProjects}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </Paper>
    </Container>
  );
}

export default App;
