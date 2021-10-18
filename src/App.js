import Navbar from './Componenets/Navbar'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './Componenets/Home'
import Skills from './Componenets/Skills'
import Projects from './Componenets/Projects'
import Contact from './Componenets/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route>404 page not found</Route>
      </Switch>
    </div>
  )
}

export default App
