import React from 'react'
import styled, {css} from "styled-components"
import { motion } from "framer-motion"

// interface
interface Props {
    children? : React.ReactNode,
    size? : string
}


// Button
export default function Button(props : Props) {
    const {children, ...rest} = props

    return (
        <Wrapper
            {...rest}
        >
            {children}
        </Wrapper>
    )
}

// Button Styles
const Wrapper = styled(motion.button)<Props>`
    // common
    border : none;
    border-radius : 1em;
    padding : 0.5em 1em 0.5em 1em;
    width : fit-content;
    background-color : var(--clr-primary);
    color : var(--foreground);
    // size
    ${(props) => {
        switch (props.size) {
            case "small": {
                return css`
                    font-size : 1em;
                `
            }
            case "medium": {
                return css`
                    font-size : 1.5em;
                `
            }
            case "large": {
                return css`
                    font-size : 2em;
                `
            }
        }
    }}
`

// Button Icon
