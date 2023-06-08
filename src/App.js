import Menu from './components/Menu';
import Content from './components/Content';

import GlobalFonts from './assets/fonts/fonts';
import GlobalStylesReset from './assets/reset';
import {PageContainer} from './App.style.js';


function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStylesReset />
      <PageContainer>
        <Menu />
        <Content />
      </PageContainer>
    </>
  );
}

export default App;
