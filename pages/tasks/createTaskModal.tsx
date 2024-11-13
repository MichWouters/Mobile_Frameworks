import {FunctionComponent, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import useTasks from '../../hooks/useTasks'
import StyledModal from '../../components/styledModal'
import StyledTextInput from '../../components/styledTextInput'
import TextButton from '../../components/textButton'

interface CreateTaskModalProps {
  isVisible: boolean
  onClose: () => void
}

const CreateTaskModal: FunctionComponent<CreateTaskModalProps> = ({isVisible, onClose}) => {
  const [taskName, setTaskName] = useState<string>('')
  const {createTask} = useTasks()

  const _createTask = () => {
    createTask(taskName)
    setTaskName('')
    onClose()
  }

  return (
    <StyledModal title="New Task" isVisible={isVisible} onClose={onClose}>
      <StyledTextInput placeholder="New task name" onChangeText={setTaskName} value={taskName} />
      <View style={[styles.buttonContainer]}>
        <TextButton label="CANCEL" onPress={onClose} />
        <TextButton label="OK" onPress={_createTask} />
      </View>
    </StyledModal>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
})

export default CreateTaskModal
