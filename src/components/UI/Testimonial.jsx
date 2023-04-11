import React from 'react'
import "../../style/testimonial.css"

import Slider from 'react-slick'

import ava01 from "../../images/ava-1.jpg"
import ava02 from "../../images/ava-2.jpg"
import ava03 from "../../images/ava-3.jpg"

const Testimonial = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:1,
        slidesToScroll:1,
        swipeToSlide:true,
    };

  return (
    <section>
        <div className="container">
            <div className="slider__content-top">
                <h6 className='subtitle'>Testimonials</h6>
                <h2>Trusted by more than {" "}<span className='highlight'>5,000 Customers</span></h2>
            </div>
            <div className="slider__wrapper">
                <Slider {...settings}>
                    <div className='slider__item'>
                        <p className="discription1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam neque. Enim dignissimos animi molestiae blanditiis tenetur accusamus in ratione distinctio libero commodi. Ipsam hic perferendis est placeat nulla sequi distinctio ratione totam Explicabo porro quia autem quos eaque.</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava01} alt="testimonial" />
                            </div>
                            <div>
                                <h5 className='customer__name'>Durgesh Agrhari</h5>
                                <p className="discription">CEO, Workcreation</p>
                            </div>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <p className="discription1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam neque. Enim dignissimos animi molestiae blanditiis tenetur accusamus in ratione distinctio libero commodi. Ipsam hic perferendis est placeat nulla sequi distinctio ratione totam Explicabo porro quia autem quos eaque.</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava02} alt="testimonial" />
                            </div>
                            <div>
                                <h5 className='customer__name'>Riya viakal </h5>
                                <p className="discription">Directer, Manage and menter</p>
                            </div>
                        </div>
                    </div>

                    <div className='slider__item'>
                        <p className="discription1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam neque. Enim dignissimos animi molestiae blanditiis tenetur accusamus in ratione distinctio libero commodi. Ipsam hic perferendis est placeat nulla sequi distinctio ratione totam Explicabo porro quia autem quos eaque.</p>

                        <div className="customer__details">
                            <div className="customer__img">
                                <img src={ava03} alt="testimonial" />
                            </div>
                            <div>
                                <h5 className='customer__name'>Himanshu sir</h5>
                                <p className="discription">Manager, Project Leed</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testimonial
