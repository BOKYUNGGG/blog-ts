import Header from "./component/Header"
import { MainRoutes } from "./Routes/MainRoutes"
import styled from "styled-components"
import './App.css'


export const App = () => {
    
    return (
        <Wrapper>
            <Header className="Header"></Header>
            <div>
                <MainRoutes className="Main"></MainRoutes>
            </div>
        </Wrapper>
    )
}
export default App

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`