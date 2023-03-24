import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider3 = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
   
  return (
    <>
      <div ref={navigationPrevRef} className='bg-black z-[30] absolute md:top-1/2 right-12 md:right-auto md:left-0 flex items-center justify-center cursor-pointer'><svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.9 13.9L1 7.5L6.9 1M1 7.4H24" stroke="#FFE38F" stroke-width="1.5"/></svg></div>
      <div ref={navigationNextRef} className='bg-black z-[30] absolute md:top-1/2 right-0 md:right-0 flex items-center justify-center cursor-pointer'><svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1 13.9L23 7.5L17.1 1M23 7.4H0" stroke="#FFE38F" stroke-width="1.5"/></svg></div>

        <Swiper
          
          slidesPerView={1}
          spaceBetween={25}
          rewind={true}
          pagination={{
            clickable: true,
            // el: 'swiper-pagination',
            type: 'bullets',
            bulletElement: 'span',
            bulletClass: 'timeline-icon',
            bulletActiveClass: 'timeline-icon-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current
          //     swiper.params.navigation.nextEl = navigationNextRef.current

          //     // Re-init navigation
          //     swiper.navigation.destroy()
          //     swiper.navigation.init()
          //     swiper.navigation.update()
          //   })
          // }}
          modules={[Navigation, Pagination]}
          className='w-full'
        >
          
              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image1.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>

              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image2.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>


              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image3.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>

              
              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image4.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>


              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image5.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>


              <SwiperSlide
                className='transition block overflow-hidden relative mt-14 md:mt-0'
              >
                <div className="w-full h-[400px]">
                    <img src="/images/image6.png" className='w-full h-full object-cover object-center' />
                </div>
                
              </SwiperSlide>

        </Swiper>
    </>
  )
}

export default Slider3