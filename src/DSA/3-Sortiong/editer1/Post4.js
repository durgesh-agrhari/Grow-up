import Markdown4 from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import Code from './Code'
import './editor.css'

const Post4 = () => {

    const [postContent, setPostContent] = useState("#Loding...")

    useEffect(() => {
        import("../markdown/markdown4/artical.md")
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
                <Markdown4 options={{
                    overrides: {
                        Code: {
                            component: Code
                        }
                    }
                }}>
                    {postContent}
                </Markdown4>
            </div>
        </div>
    </article>
  )
}

export default Post4
