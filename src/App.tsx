import { AppHeader, AppFooter } from "@/components/common";
import {DetailInfo} from "@/pages/DetailInfo.tsx"
import {Main} from "@/pages/Main.tsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    const toggleDark = () => {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <div className="page">
            <BrowserRouter>
                <AppHeader toggleDark={toggleDark}/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/page/info/:id" element={<DetailInfo/>}/>
                </Routes>
                <AppFooter/>
            </BrowserRouter>
        </div>
    );
}

export default App
