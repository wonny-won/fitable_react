import Banner from "./banner/banner";
import NavBar from "./nav/navBar";

type PageComp = {
    children : React.ReactNode
}

export default function LayoutPage(props:PageComp){
    return(
        <body style={{display:'flex'}}>
            <NavBar />
            <div style={{width:'100%',height:'100vh',padding:'0px 4px',overflow:'auto'}}>
                <Banner />
                <main>
                    {props?.children}
                </main>
            </div>
        </body>
    )
}