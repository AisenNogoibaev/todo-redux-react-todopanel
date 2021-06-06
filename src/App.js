import "./App.css";
import { TodoPanel } from './components/TodoPanel'
import { TodoList } from './components/TodoList'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// main component
function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/panel" component={TodoPanel} />
          <Route path="/" component={TodoList} />
        </Switch>
      </Router>
    </div>
  )
}
export default App;