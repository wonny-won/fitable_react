import NavBar from "../../molecule/nav/navBar";
import { useLocation } from "react-router-dom";

type PageComp = {
    children : React.ReactNode
}

export default function LayoutPage(props:PageComp){
    const withoutNavpath = ['/login']
    const currLocation = useLocation()
    const isNotIncludeNav = withoutNavpath.includes(currLocation.pathname)

    return(
        <>
            <div style={{display:'flex'}}>
                {  !isNotIncludeNav && <NavBar /> }
                <div style={{width:'100%',height:'100vh',overflow:'auto'}}>
                    <main style={{padding:'0px 4px'}}>
                        {props?.children}
                    </main>
                </div>
            </div>
        </>
    )
}