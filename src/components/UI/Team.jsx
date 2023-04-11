import React from 'react'
import "../../style/team.css"
import teamImg1 from "../../images/team-01.png"
import teamImg2 from "../../images/team-02.png"
import teamImg3 from "../../images/team-03.png"
import teamImg4 from "../../images/team-04.png"

const teamMembers = [
    {
        imgUrl: teamImg1,
        name: 'Curtteny Hurry',
        position: 'Product developer',
    },
    {
        imgUrl: teamImg2,
        name: 'Curtteny Hurry',
        position: 'Product developer',
    },
    {
        imgUrl: teamImg3,
        name: 'Curtteny Hurry',
        position: 'Product developer',
    },
    {
        imgUrl: teamImg4,
        name: 'Curtteny Hurry',
        position: 'Product developer',
    },
]

const Team = () => {
  return (
    <section>
        <div className='container'>
            <div className='team__content'>
                <h6>Our team</h6>
                <h2>Meet with <span className='highlight'>our team</span> </h2>
            </div>

            <div className='team__wrapper'>
                {
                    teamMembers.map((item,index) => (
                        <div className='team__item' key={index}>
                        <div className="team__img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team__details">
                            <h4>{item.name}</h4>
                            <p className="discription">{item.position}</p>
                            <div className='team__member-social'>
                                <span><i class="ri-linkedin-fill"></i></span>
                                <span><i class="ri-twitter-line"></i></span>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Team
