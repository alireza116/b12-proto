import "./App.css";
import StudentView from "./pages/StudentView";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <ResponsiveAppBar position="sticky"></ResponsiveAppBar>
        <StudentView></StudentView>
      </Container>
    </div>
  );
}

export default App;
