import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListPage from './pages/ListPage'
import HomePage from './pages/HomePage'
import SignIn from './components/SignIn'
import Loading from './components/shared/Loading'
import useAuth from './hooks/useAuth'
import Luretype from './components/hobbyist/Luretype'
import Rodtype from './components/hobbyist/Rodtype'
import Reeltype from './components/hobbyist/Reeltype'
import Braidlinetype from './components/hobbyist/Braidlinetype'
import Leaderlinetype from './components/hobbyist/Leaderlinetype'

export const UserContext = React.createContext()

function App() {
  const { user, loading } = useAuth()
  if (loading) return <Loading />
  return user ? <AuthApp user={user} /> : <UnAuthApp />
}

function AuthApp({ user }) {
  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={user}>
          {/* <Route path='/:listId' component={ListPage} /> */}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/luretype' component={Luretype} />
          <Route exact path='/rodtype' component={Rodtype} />
          <Route exact path='/reeltype' component={Reeltype} />
          <Route exact path='/braidlinetype' component={Braidlinetype} />
          <Route exact path='/leaderlinetype' component={Leaderlinetype} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}

function UnAuthApp() {
  return <SignIn />
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
