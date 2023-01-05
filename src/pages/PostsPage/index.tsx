import React from 'react'

interface Props {
    className? : string
}
const PostsPage = (props : Props) => {
    return (
        <div className={props.className}>
            PostsPage
        </div>
    )
}

export default PostsPage