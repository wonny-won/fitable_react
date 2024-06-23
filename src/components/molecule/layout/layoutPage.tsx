import NavBar from "./nav/navBar";

export default function LayoutPage(props:any){
    return(
        <body style={{display:'flex'}}>
            <NavBar />
            <main style={{width:'100%', height:'100vh',marginLeft:'4px'}}>
                {props.children}
            </main>
        </body>
    )
}