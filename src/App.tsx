import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';
import PageNotFound from './pages/PageNotFound';
import Layout from './pages/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
    return (
        <DarkModeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path='about' element={<AboutMe />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='contact' element={<ContactPage />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkModeProvider>
    );
}

export default App;
