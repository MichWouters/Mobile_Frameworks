import {ComponentProps, FunctionComponent, useContext} from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContext} from '../context/themeProvider'
import {Ionicons} from '@expo/vector-icons'

interface IconButtonProps extends ComponentProps<typeof Ionicons> {
  onPress?: () => void
}

const IconButton: FunctionComponent<IconButtonProps> = ({onPress, ...iconProps}) => {
  const {textColor} = useContext(ThemeContext)

  return <></>
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default IconButton
