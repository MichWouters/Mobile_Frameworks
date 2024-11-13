import {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {Modal, StyleSheet, View, Text} from 'react-native'
import {ThemeContext} from '../context/themeProvider'


interface StyledModalProps extends PropsWithChildren {
  isVisible: boolean
  onClose: () => void
  title: string
}

const StyledModal: FunctionComponent<StyledModalProps> = ({isVisible, onClose, children, title}) => {
  const {textColor, accentColor, surfaceColor, backgroundColor} = useContext(ThemeContext)

  return (
    <Modal visible={isVisible} animationType="slide" transparent onRequestClose={onClose}>
      <View style={[styles.centeredView, {backgroundColor: hex2rgba(backgroundColor, 0.5)}]}>
        <View style={[styles.modalView, {backgroundColor: surfaceColor, shadowColor: accentColor}]}>
          <View style={[styles.titleContainer]}>
            <Text style={[styles.title, {color: textColor}]}>{title}</Text>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '80%',
    margin: 20,
    borderRadius: 2,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  titleContainer: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 30,
  },
})

export default StyledModal
