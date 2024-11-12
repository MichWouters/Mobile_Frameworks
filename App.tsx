import ThemeProvider from "./context/themeProvider";
import TaskPage from "./pages/tasks/taskPage";


export default function App() {
  return (
    <ThemeProvider>
      <TaskPage />
    </ThemeProvider>
  )
}

