import {createContext, FunctionComponent, PropsWithChildren} from 'react'
import {useColorScheme} from 'react-native'

interface Theme {
  textColor: string
  accentColor: string
  backgroundColor: string
  surfaceColor: string
}

const darkTheme: Theme = {
  textColor: '#d4d7db',
  accentColor: '#d4d7db',
  backgroundColor: '#282c34',
  surfaceColor: '#1c1c22',
}

const lightTheme: Theme = {
  textColor: '#0F0F0F',
  accentColor: '#0F0F0F',
  backgroundColor: '#ffffff',
  surfaceColor: '#f9f7f4',
}

export const ThemeContext = createContext<Theme>(darkTheme)

const ThemeProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
  return <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider