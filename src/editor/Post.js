import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import Code from './Code'
// import EditHeader from './EditHeader'

const Post = () => {

    const [postContent, setPostContent] = useState("#Hello")

    useEffect(() => {
        import("../markdown/artical.md")
        .then( res => {
            fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        })
    }, [])
  return (
    <article className='article'>
        {/* <EditHeader/> */}
        <div className='container'>
            <div className='post-wrapper'>
                <Markdown options={{
                    overrides: {
                        Code: {
                            component: Code
                        }
                    }
                }}>
                    {postContent}
                </Markdown>
            </div>
        </div>
    </article>
  )
}

export default Post
