import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import Following from './Pages/Following';
import Profile from './Pages/Profile';
import Upload from './Pages/Upload';
import DefaultLayout from './components/Layout/DefaultLayout';
import HeaderOnly from './components/Layout/HeaderOnly';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route path="/following" element={<Following />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                    path="/upload"
                    element={
                        <HeaderOnly>
                            <Upload />
                        </HeaderOnly>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
