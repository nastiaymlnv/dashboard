import React from "react";

import Costumers from "./pages/Costumers";

import Menu from './components/Menu';

import GlobalFonts from './assets/fonts/fonts';
import GlobalStylesReset from './assets/reset';

import {
  PageContainer,
  ContentContainer,
  GreetingMsg
} from './App.style.js';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStylesReset />
      <PageContainer>
        <Menu />
        <ContentContainer>
          <GreetingMsg>
            Hello Evano
            <span role="img" aria-label="sheep">👋🏼</span>
            ,
          </GreetingMsg>
          <Costumers />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default App;
