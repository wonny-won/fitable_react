import { Route,Routes } from "react-router-dom"
import Home from "components/views/home"
import FeedBackProgramApply from "components/views/program/feedBackProgramApply"
import ProgramMento from "components/views/program/programMento"

export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/program" element={<FeedBackProgramApply/>} />
            <Route path='/program/:id' element={<ProgramMento/>} />
          </Routes>
        </>
    )
}