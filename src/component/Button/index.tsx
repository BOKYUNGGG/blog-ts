import React from 'react'
import styled from "@emotion/styled"
import { motion } from "framer-motion"

// interface
interface Props {
    children? : React.ReactNode
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
    
`

// Button Icon
