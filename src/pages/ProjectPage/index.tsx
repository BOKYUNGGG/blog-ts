import React from 'react'

interface Props {
    className? : string
}
const ProjectPage = (props : Props) => {
    return (
        <div className={props.className}>
            <div style={style_1}>
                <h1>Hello, world</h1>    
            </div>
            <div style={style_2}>
                <h1 style={transText}>Hello, world</h1>    
            </div>
        </div>
    )
}

export default ProjectPage

const style_1 : React.CSSProperties ={
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    backgroundImage : "url('https://i.imgur.com/dr60APA.jpeg')",
    backgroundPosition : "center",
    backgroundSize : "cover",
    height : "25em"
}

const style_2 : React.CSSProperties = {
    
}

const transText : React.CSSProperties = {
    backgroundImage : "linear-gradient(blue,purple,red)",
    backgroundClip : "text",
    WebkitBackgroundClip : "text",
    color : "transparent",

}