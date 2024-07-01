import NavBar from "../molecule/nav/navBar";

type PageComp = {
    children : React.ReactNode
}

export default function LayoutPage(props:PageComp){
    return(
        <>
            <div style={{display:'flex'}}>
                <NavBar />
                <div style={{width:'100%',height:'100vh',overflow:'auto'}}>
                    <main style={{padding:'0px 4px'}}>
                        {props?.children}
                    </main>
                </div>
            </div>
        </>
    )
}