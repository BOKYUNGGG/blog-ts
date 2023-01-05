import { useRoutes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import ProjectPage from "../pages/ProjectPage";


interface Props {
    className? : string
}
export const MainRoutes = (props : Props) =>{
    return useRoutes([
        {path : '/', element: <HomePage className={props.className}/>},
        {path : '/about', element: <AboutPage className={props.className}/>},
        {path : '/project', element : <ProjectPage className={props.className}/>},
        {path : '/posts', element : <PostsPage className={props.className}/>}
    ])
}