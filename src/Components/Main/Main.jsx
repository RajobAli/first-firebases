import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

// Local Link:https://github.com/RajobAli/first-firebases
// Live Link : https://651a61c6e86c39521f8245ea--classy-faloodeh-c65dc6.netlify.app/


const Main = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;