import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PeliculaDetails } from "./pages/PeliculaDetails";
import { LandingPage } from "./pages/LandingPage";


export function App() {
  return (
    <Router>
          <header>
              <Link to="/">
                <h1 className={styles.title}>Películas</h1>
              </Link>
      </header>
      <main>
              <Switch>
                  <Route exact path="/peliculas/:peliculaId">
                      <PeliculaDetails />
                  </Route>
                  <Route path="/"><LandingPage /></Route>
              </Switch>
      </main>
    </Router>
  );
}
