import { AppHeader, AppFooter } from "@/components/common";
import {Main} from "@/pages/Main.tsx"

function App() {

    return (
        <div className="page">
            <AppHeader/>
            <Main/>
            <div className="container"></div>
            <AppFooter/>
        </div>
    );
}

export default App
