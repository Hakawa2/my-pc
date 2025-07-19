import { Desktop } from "@/layouts/Desktop/Desktop";
import { TaskBar } from "@/layouts/Taskbar/Taskbar";
import "./App.css";

function App() {
  return (
    <div className="background">
      <Desktop />
      <TaskBar />
    </div>
  );
}

export default App;
