import { Route,Routes } from "react-router-dom"
import Home from "components/views/home"
import FeedBackProgramApply from "components/views/program/feedBackProgramApply"
import ProgramMento from "components/views/program/programMento"
import Login from "components/views/login"
import JoinUs from "components/views/joinUs"
import MyPage from "components/views/myPage"

export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/program" element={<FeedBackProgramApply/>} />
            <Route path='/program/:id' element={<ProgramMento/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/joinus' element={<JoinUs/>} />
            <Route path='/myPage' element={<MyPage/>} />
          </Routes>
        </>
    )
}