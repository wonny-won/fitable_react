import { Route,Routes } from "react-router-dom"
import Home from "pages/home"
import FeedBackProgram from "pages/feedBackProgram"

export default function RoutesCompoents(){
    return (
        <>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/program" element={<FeedBackProgram/>} />
          </Routes>
        </>
    )
}