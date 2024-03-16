import Markdown1 from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import Code from './Code'
import './editor.css'

const Post1 = () => {

    const [postContent, setPostContent] = useState("#Hello")

    useEffect(() => {
        import("../markdown/markdown1/artical.md")
        .then( res => {
            fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        })
    }, [])
  return (
    <article className='article'>
        <div className='containerp'>
            <div className='post-wrapper'>
                <Markdown1 options={{
                    overrides: {
                        Code: {
                            component: Code
                        }
                    }
                }}>
                    {postContent}
                </Markdown1>
            </div>
        </div>
    </article>
  )
}

export default Post1
