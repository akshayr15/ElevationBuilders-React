import react, { Component, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);
function Testimonial() {
  // isMounted circle lift
  useEffect(() => {
    // run your code here
  }, []);

  return (
    <div className="theme-section theme-section-ex-padding testimonial-section gray-bg" style={{ marginTop: "100px" }}>
      <div className="area-heading text-center">
        <h2 className="area-title">what our clients say?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          sunt a recusandae molestias nobis reprehenderit eaque laborum,
          veritatis accusantium aspernatur?
        </p>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ draggable: true }}
        autoplay={{ delay: 1000 }}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide navigation pagination>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-wrapper navigation-style-1">
            <div className="single-testimonial ">
              <blockquote>
                <img src="img/avatar/1.jpg " alt=" " className="client-image" />
                <p className="client-name ">
                  John Doe <span className="designation ">CEO Microsoft</span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum, cumque, quibusdam.
                </p>
              </blockquote>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Testimonial;
