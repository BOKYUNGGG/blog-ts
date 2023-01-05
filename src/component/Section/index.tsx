import React from 'react'
import styled from 'styled-components'

// interface
interface Props {
    children? : React.ReactNode
}

// Section
export const Section = (props : Props) =>{


    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}
export default Section

// Section Styles
const Wrapper = styled.section`
    display : flex;
    flex-direction : column;
    padding : 0.5em;
    gap : 0.5em;
    
    .heading{
        font-size : var(--section-title);
        font-weight : bold;
    }
    .paragraph{
        font-size : var(--paragraph);
        color : var(--clr-complementary);
    }
    .spark{
        font-size : var(--paragraph);
        color : var(--clr-spark);
    }
`


// Section.Heading
const Heading = (props : Props) =>{
    return (
        <div className='heading'>
            {props.children}
        </div>
    )
}
Section.Heading = Heading

// Section.Paragra
const Paragraph = (props : Props) => {
    return(
        <div className='paragraph'>
            {props.children}
        </div>
    )
}
Section.Paragraph = Paragraph

const Spark = (props : Props) =>{
    return (
        <div className='spark'>
            {props.children}
        </div>
    )
}
Section.Spark = Spark