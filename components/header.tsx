import {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {ThemeContext} from '../context/themeProvider'
import {StatusBar} from 'expo-status-bar'

interface TitleBarProps extends PropsWithChildren {
    title: string
  }

const Header: FunctionComponent<TitleBarProps> = ({title, children}) => {
  const {surfaceColor, textColor} = useContext(ThemeContext)

  return (
    <View style={[style.container, {backgroundColor: surfaceColor}]}>
      <View style={[style.titleContainer]}>
        <Text style={[style.title, {color: textColor}]}>{title}</Text>
      </View>
      <View style={[style.toolbar]}>{children}</View>
      <StatusBar style="auto" backgroundColor={surfaceColor} />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleContainer: {
      flexGrow: 1,
    },
    toolbar: {
      flex: 1,
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 40,
      lineHeight: 40,
    },
  })

  export default Header