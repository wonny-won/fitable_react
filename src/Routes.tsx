import { Route,Routes } from "react-router-dom"
import Home from "components/views/home"
import FeedBackProgramApply from "components/views/apply/feedBackProgramApply"
import ApplyMento from "components/views/apply/applyMento"

export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/program" element={<FeedBackProgramApply/>} />
            <Route path='/program/:id' element={<ApplyMento />} />
          </Routes>
        </>
    )
}