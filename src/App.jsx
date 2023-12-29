import { useState } from 'react'
import './App.css'
import StartingPage from "./StartingPage.jsx"
import Card from "./Card"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ThankYou from './thankyou'

function App() {

  return (
    <Router>
      <section className=' w-4/5 m-10 mt-0'>
        <Switch>
          <Route exact path="/"><StartingPage/></Route>
          <Route exact path="/cardDetails"><Card /></Route>
          <Route exact path="/thankyou"><ThankYou /></Route>
        </Switch>
      </section>
    </Router>
  )
}

export default App
