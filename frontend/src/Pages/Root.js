import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

function RootPage(){

    return(
    <>
    <MainNavigation/>
    <main>
     {/* navigation.state === 'loading' && <p>loading...</p>*/}
        <Outlet/>
    </main>
    
    </>
    )
}

export default RootPage;