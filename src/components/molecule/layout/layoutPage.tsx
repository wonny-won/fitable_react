import Banner from "./banner/banner";
import NavBar from "./nav/navBar";

type PageComp = {
    children : React.ReactNode
}

export default function LayoutPage(props:PageComp){
    return(
        <body style={{display:'flex'}}>
            <NavBar />
            <div style={{width:'100%',height:'100vh',overflow:'auto'}}>
                <Banner />
                <main style={{padding:'0px 4px'}}>
                    {props?.children}
                </main>
            </div>
        </body>
    )
}