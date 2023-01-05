import React from 'react'

interface Props {
    className? : string
}
const AboutPage = (props : Props) => {
    return (
        <div className={props.className}>
            AboutPage
        </div>
    )
}

export default AboutPage