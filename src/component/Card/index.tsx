import styled from "@emotion/styled"
import { motion, HTMLMotionProps } from "framer-motion"

interface Props {

}



export default function Card(props : Props) {
    return (
        <Wrapper>
            Card
        </Wrapper>
    )
}
const Wrapper = styled(motion.div)<Props>`
    width : 100%;
`

const Title = () => {
    return (
        <div>

        </div>
    )
}