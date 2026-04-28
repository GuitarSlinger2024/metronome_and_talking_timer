import { SettingsProvider } from './context/SettingsContext'
import Main from "./components/Main"

function App() {

  return (
    <SettingsProvider>
      <Main />
    </SettingsProvider>
  )
}

export default App
