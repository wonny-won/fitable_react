import { Route,Routes } from "react-router-dom"
import Home from "pages/home"
import FeedBackProgramApply from "pages/feedBackProgramApply"

export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/program" element={<FeedBackProgramApply/>} />
          </Routes>
        </>
    )
}