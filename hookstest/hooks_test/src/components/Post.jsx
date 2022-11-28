import React, { useEffect } from 'react'
const Post = () => {
    useEffect(() => {
        console.log("first")

    }, [])

    return (
        <div>Post</div>
    )
}

export default Post