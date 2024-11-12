import { FC, useContext } from "react";
import { Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeContext } from "../../context/themeProvider";



const TaskPage: FC = () => {
    const { backgroundColor, textColor } = useContext(ThemeContext)
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={[styles.container, { backgroundColor }]}>
                <Text style={[{ color: textColor }]}>Een eerste React Native App</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default TaskPage