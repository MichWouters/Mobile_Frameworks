import {FunctionComponent, useContext} from 'react'
import {StyleSheet, View} from 'react-native'

import {ThemeContext} from '../../context/themeProvider'
import ITask from '../../models/ITask'
import useTasks from '../../hooks/useTasks'
import StyledText from '../../components/styledText'
import IconButton from '../../components/iconButton'

const ToDoItem: FunctionComponent<ITask> = ({name, id, completed}) => {
  const {accentColor} = useContext(ThemeContext)
  const {toggleTaskStatus} = useTasks()

  return (
    <View style={[styles.container, completed && {borderColor: 'green'}]}>
      <View style={[styles.labelContainer]}>
        <StyledText style={[styles.label]}>{name}</StyledText>
      </View>
      <View style={[styles.statusContainer]}>
        <IconButton
          onPress={() => toggleTaskStatus(id)}
          name={completed ? 'checkmark-done-circle' : 'checkmark-circle-outline'}
          color={completed ? 'green' : accentColor}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#d4d7db',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  label: {
    flex: 1,
  },
  labelContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  statusContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
})

export default ToDoItem
