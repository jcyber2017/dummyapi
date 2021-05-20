import './App.css'
import Main from './components/Main'
import {
  /*jsonService,*/
  httpService,
  fetchService
} from './services/fetchService'

/**
 * Note que puede usar jsonService para obtener los valores desde
 * los archivos json de la carpeta mocks
 * Esto puede ser util para pruebas sin necesidad de solicitar
 * datos a la api https://dummyapi.io/data/api
 * const service = new fetchService(new jsonService())
**/

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
