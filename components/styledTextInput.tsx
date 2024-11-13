import {ComponentProps, FunctionComponent, useContext} from 'react'
import {StyleSheet, TextInput} from 'react-native'
import {ThemeContext} from '../context/themeProvider'

type StyledTextInputProps = ComponentProps<typeof TextInput>

const StyledTextInput: FunctionComponent<StyledTextInputProps> = ({style, ...rest}) => {
  const {textColor, accentColor} = useContext(ThemeContext)

  return (
    <TextInput
      placeholderTextColor={textColor}
      style={[styles.input, {borderColor: accentColor, color: textColor}, style]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
})

export default StyledTextInput
