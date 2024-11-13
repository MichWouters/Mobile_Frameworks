import {FunctionComponent, useContext} from 'react'
import {Pressable, StyleSheet, View} from 'react-native'


import {ThemeContext} from '../context/themeProvider'
import StyledText from './styledText'

interface ButtonProps {
  label: string
  onPress?: () => void
}

const TextButton: FunctionComponent<ButtonProps> = ({label, onPress}) => {
  const {accentColor} = useContext(ThemeContext)

  return (
    <View style={styles.buttonContainer}>
      {/**
       * We gebruiken hier de Pressable component in de plaats van de Button component die ook
       * beschikbaar is in de core componenten.
       * De Button component kan niet gestyled worden, de style property is dus niet beschikbaar.
       * De Pressable component is dus een veel betere optie.
       */}
      <Pressable style={[styles.button, {borderColor: accentColor}]} onPress={onPress}>
        <StyledText style={styles.buttonLabel}>{label}</StyledText>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
  },
})

export default TextButton
