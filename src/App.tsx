import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import styled from 'styled-components';
import SimpleKLine from "./pages/SimpleKLine";

const AppWrapper = styled.div`
  width: 100%;
  min-width: 1200px;
  min-height: 800px;
`

function App() {
  return (
    <AppWrapper className="container">
      <SimpleKLine />
    </AppWrapper>
  );
}

export default App;
