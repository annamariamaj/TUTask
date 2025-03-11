import { useRef } from 'react'
import './App.css'
import { Box, chakra, ChakraProvider, defaultSystem, SimpleGrid, Stat, StatLabel } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import CallToActionWithAnnotation from './test2';
import MainPage from './pages/MainPage';
import UserDetailsPage from './pages/UserDetailPage';
import { ImageProvider } from './contexts/ImageContext';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  const nodeRef = useRef(null); 
  
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname} // Triggers animation when path changes
        timeout={300}
        classNames="fade"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const App: React.FC = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ImageProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
        </ImageProvider>
    </ChakraProvider>
  );
};

export default App
