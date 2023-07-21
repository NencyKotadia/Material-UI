import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add"
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  // const [theme, setTheme] = useState(createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // }));

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // useEffect(()=>{
  //   const darkTheme = createTheme({
  //     palette: {
  //       mode: mode,
  //     },
  //   });
  //   setTheme(darkTheme)
  // },[mode])

  return (
    // <ThemeProvider theme={theme}>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>

        <Add />

      </Box>
    </ThemeProvider>
  );
}

export default App;
