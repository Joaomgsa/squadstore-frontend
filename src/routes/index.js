import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<Categories/>}/>
        </Routes>
    );
}