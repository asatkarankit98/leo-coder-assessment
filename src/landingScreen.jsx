import React, { useState } from 'react';
import './landing_screen.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const LandingScreen = () => {

    const [selected, setSelected] = useState("home");
    const menuClick = (menu) =>{
        setSelected(menu)
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div>
            <div class="header">
                    <img src="logos.png" alt="" />
                    <span className="me-5 font-weight-bold"><h6>Find teachers</h6></span>
                    <span className="font-weight-bold"><h6>Because a teachers</h6></span>
                    
            <nav>
                <ul>
                    <li className="float-end"><img src="sign-in.png" style={{width:"22%",margin:"7px"}}/><a href="" onClick={()=>menuClick("home")}>Log In</a></li>
                </ul>

            </nav>
    
        </div>
            <div class=" main_container">
        <div class="content row">
            <div class="text col-5">
                <h1>Find the right language or computer teacher <br /> 
                </h1>
                <div class="search_box mt-4">
                    <input type="text" placeholder="Search by langunage or IT speciality" name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                </div>
           </div>
            <div class="pepsi col-6">
                <img src="banner-image-1.png" alt="" />
            </div>
       </div>

        </div>
        <div className="language_section" style={{padding:"5rem"}}>
            <div >
                <div className="row"><h5 className="col-10">Content copied</h5> <span className="col-2 text-end pe-5"><a href="">View more..</a></span></div>
                <div className="row py-4">
                    <div className="col-3 Component_1" style={{height:"11rem"}}>
                        <div className="image_component"></div>
                    </div>
                    <div className="col-3 Component_2">
                    <div className="image_component2"></div>
                    </div>
                    <div className="col-3 Component_3">
                    <div className="image_component3"></div>
                    </div>
                    <div className="col-3 Component_4">
                    <div className="image_component4"></div>
                    </div>
                </div>
            </div>
            <div>
            <div className="row"><h5 className="col-10">Computer And Programming Teachers</h5><span className="col-2 text-end pe-5"><a href="">View more..</a></span></div>
                <div className="row py-4">
                    <div className="col-3 Component_1" style={{height:"11rem"}}>
                        <div className="image_component"></div>
                    </div>
                    <div className="col-3 Component_2">
                    <div className="image_component2"></div>
                    </div>
                    <div className="col-3 Component_3">
                    <div className="image_component3"></div>
                    </div>
                    <div className="col-3 Component_4">
                    <div className="image_component4"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about_section row mt-0 mx-0 py-5" style={{display:"inline-flex",height: "35rem"}}>
            <div className="image_section col-md-6 py-md-3 ">
                {/* d-flex flex-row-reverse */}
                <div className="col-12">
                    <h4>I'm a Student.</h4>
                    <div className="vdo_section col-md-10 col-12" >
                        <video width="100%" height="340" controls style={{borderRadius: "24px 0px"}}>
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className="text_section col-md-5" >
                <h2 >I'm a Student.</h2>
                <h4 className="my-4">Know More About me</h4>
                <p>First-time students will receive a voucher of 15€ for Etsy (www.etsy.de), a platform offering handmade items directly from the producers. </p>
            </div>
        </div>
        <div class="about_section_teacher row mt-0 mx-0 " style={{display:"inline-flex",height: "38rem",padding:"8rem 4rem"}}>
            <div className="text_section col-md-5">
                <h2 >I'm a Teacher.</h2>
                <h4 className="my-4">Know More About me</h4>
                <p>First-time students will receive a voucher of 15€ for Etsy (www.etsy.de), a platform offering handmade items directly from the producers. </p>
            </div>
            <div className="image_section col-md-7 py-md-3 ">
                {/* d-flex flex-row-reverse */}
                <div className="col-11">
                    <div className="vdo_section2 col-md-11 col-12" >
                        <video width="100%" height="340" controls style={{borderRadius: "24px 0px"}}>
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>    
        </div>
        <div class="reatings_section row mt-0 mx-0 py-0" style={{display:"inline-flex",height: "21rem"}}>
            <div className="image_section col-md-4 py-md-3 ">
                {/* d-flex flex-row-reverse */}
                <div className="col-12">
                    <h4>Success Story</h4>
                    <div className="Review_block col-md-10 col-12" >
                        <div className="reatings_box">
                            <p>Excellent</p>
                            <p><div id="rating1" class="star-rating" role="rating" data-rating="3">
                                <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                                <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                            </div></p>
                            <p>4.90 average</p>
                            <p>49 review</p>
                            <p>REVIEWS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review_section col-md-7" >
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div className="cust_reating">
                    <p>Martin Krause</p>
                    <p><div id="rating1" class="star-rating" role="rating" data-rating="3">
                        <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                    </div></p>
                    <p>Verified Customer</p>
                    <p>Devid's experties and professinality was briliant it was exectly with..</p>
                    <p className="mt-4" style={{textAlign:"right"}}>6 mounth ago</p>
                </div>
                <div className="cust_reating">
                <p>Martin Srause</p>
                    <p><div id="rating1" class="star-rating" role="rating" data-rating="3">
                        <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                    </div></p>
                    <p>Verified Customer</p>
                    <p>Devid's experties and professinality was briliant it was exectly with..</p>
                    <p className="mt-4" style={{textAlign:"right"}}>6 mounth ago</p>
                </div>
                <div className="cust_reating">
                    <p>Martin Arause</p>
                    <p><div id="rating1" class="star-rating" role="rating" data-rating="3">
                        <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                    </div></p>
                    <p>Verified Customer</p>
                    <p>Devid's experties and professinality was briliant it was exectly with..</p>
                    <p className="mt-4" style={{textAlign:"right"}}>6 mounth ago</p>
                </div>
                <div className="cust_reating">
                <p>Martin Brause</p>
                    <p><div id="rating1" class="star-rating" role="rating" data-rating="3">
                        <span class="star" data-value="1">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="2">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="3">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="4">&#9733;<span class="star-notification"></span></span>
                        <span class="star" data-value="5">&#9733;<span class="star-notification"></span></span>
                    </div></p>
                    <p>Verified Customer</p>
                    <p>Devid's experties and professinality was briliant it was exectly with..</p>
                    <p className="mt-4" style={{textAlign:"right"}}>6 mounth ago</p>
                </div>
            </Carousel>;
                
            </div>
        </div>
        <div className="footer_section" style={{backgroundColor:"blue"}}>
                <h3>Free learning resources</h3>
                <div><p>Blog <span>|</span> Videos <span>|</span> Games <span>|</span> Exercies <span>|</span> Tests <span>|</span> Skills <span>|</span> Community</p></div>
                <div className="row">
                    <div className="col-4 pt-5">
                        <ul>
                            <li>About</li>
                            <li className="mx-5">Support</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <img src="footer_logo.png" alt="" style={{ height: "132px",width: "135px"}}/>
                    </div>
                    <div className="col-4 pt-5">
                        <a>© Copyright 2022 Dualingua All rights reserved</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingScreen;
