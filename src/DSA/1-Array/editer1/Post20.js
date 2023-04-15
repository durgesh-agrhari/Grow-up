import Markdown20 from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import Code from './Code'
import './editor.css'

const Post2 = () => {

    const [postContent, setPostContent] = useState("#Loding...")

    useEffect(() => {
        import("../markdown/markdown20/artical.md")
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
                <Markdown20 options={{
                    overrides: {
                        Code: {
                            component: Code
                        }
                    }
                }}>
                    {postContent}
                </Markdown20>
            </div>
        </div>
    </article>
  )
}

export default Post2
