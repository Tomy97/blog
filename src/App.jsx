import React from 'react'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import Layout from './Components/Layout'
import Home from './Pages/Home/Home'
import CreateForm from './Pages/Form/CreateForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const App = () => {
  return (
    <>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <CreateForm />
            </Route>
          </Switch>
        </Router>
      </Layout>

    </>
  )
}

export default App
