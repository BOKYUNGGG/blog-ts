import { Link } from 'react-router-dom'
import styled from 'styled-components'


interface Props {
    className? : string
}
export const Header = (props : Props) =>{


    return (
        <Wrapper className={props.className}>
            {/* <Link to={'/'}>BOKYUBGGG.io</Link> */}
            {/* <ul className='nav'>
                <Link to={'/about'} className='nav-item'>About</Link>
                <Link to={'/project'} className='nav-item'>Project</Link>
                <Link to={'/posts'} className='nav-item'>Post</Link>
            </ul> */}

            BOKYUNGGG
        </Wrapper>
    )
}


// styled-component
const Wrapper = styled.header`
    display : flex;
    justify-content : center;
    padding : 1em;
`
export default Header