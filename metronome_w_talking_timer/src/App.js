import { SettingsProvider } from './context/SettingsContext'
import { TabSettings } from './context/TabContext'
import Main from './components/Main'

function App() {
  return (
    <SettingsProvider>
      <TabSettings>
        <Main />
      </TabSettings>
    </SettingsProvider>
  )
}

export default App
