import './App.css'
import Main from './components/Main'
import {
  jsonService,
  httpService,
  fetchService
} from './services/fetchService'

const App = () => {
  const service = new fetchService(new httpService())
  return (
    <div className="App" style={styles.container}>
      <Main fetchService={service} />
    </div>
  )
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

export default App
