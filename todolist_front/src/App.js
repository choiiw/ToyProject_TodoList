
import './App.css';
import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import MainPage from './pages/MainPage';
import CompletePage from './pages/CompletePage';
import IncompletePage from './pages/IncompletePage';
import AllListPage from './pages/AllListPage';

function App() {
  return (
    <>
      <Global css={reset}/>
          <MainLayout>
            <MainContainer>
                <Routes>
                  <Route path="/todolist" element={<MainPage />} />
                  <Route path="/todolist" element={<AllListPage />} /> 
                </Routes>
            </MainContainer>

          </MainLayout>
    </>
  );
}

export default App;
