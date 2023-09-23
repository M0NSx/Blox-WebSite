import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/mainpage"
import { CreateAccount } from "./pages/createaccount"
import { LogIn } from "./pages/login"

function App() {
    return (

        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/LogIn" element={<LogIn />} />
        </Routes>
    )
}

export default App