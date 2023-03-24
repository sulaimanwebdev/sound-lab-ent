import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider2 = () => {

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
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
           
            844: {
              slidesPerView: 3,
            },
            
          }}

          slidesPerView={3}
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
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate1.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">Nicole | Photographer</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Passionate photographer capturing life's moments, creating friendships, and celebrating milestones!</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>

              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate2.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">SoundLab Studio 15</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Sound Lab Studio 15: High-quality recordings for special moments, with pro audio engineers & cozy vibes.</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>


              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate3.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">Kahryssa |  Photographer</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Kahryssa, capturing love & art, excited for new & returning clients! Grateful for connections & support.</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>

              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate1.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">Nicole | Photographer</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Passionate photographer capturing life's moments, creating friendships, and celebrating milestones!</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>

              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate2.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">SoundLab Studio 15</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Sound Lab Studio 15: High-quality recordings for special moments, with pro audio engineers & cozy vibes.</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>


              <SwiperSlide
                className='transition rounded-lg block overflow-hidden relative px-5 mt-14 md:mt-0'
              >
                <div className="flex items-center justify-center flex-col text-center">
          <img src="/images/affliate3.png" alt="Affliate" className="w-[220px]" />
          <div className="text-[#C29A54] font-[700] text-[21px] mt-4">Kahryssa |  Photographer</div>
          <div className="mt-1 text-[#FDF0C8] max-w-[600px] mx-auto">Kahryssa, capturing love & art, excited for new & returning clients! Grateful for connections & support.</div>
          <a href="#" className="transition hover:-translate-y-[3px] mt-7"><svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.5C1 7.37827 1.84285 5.34344 3.34315 3.84315C4.84344 2.34285 6.87827 1.5 9 1.5H25C27.1217 1.5 29.1566 2.34285 30.6569 3.84315C32.1571 5.34344 33 7.37827 33 9.5V25.5C33 27.6217 32.1571 29.6566 30.6569 31.1569C29.1566 32.6571 27.1217 33.5 25 33.5H9C6.87827 33.5 4.84344 32.6571 3.34315 31.1569C1.84285 29.6566 1 27.6217 1 25.5V9.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17.5C11 19.0913 11.6321 20.6174 12.7574 21.7426C13.8826 22.8679 15.4087 23.5 17 23.5C18.5913 23.5 20.1174 22.8679 21.2426 21.7426C22.3679 20.6174 23 19.0913 23 17.5C23 15.9087 22.3679 14.3826 21.2426 13.2574C20.1174 12.1321 18.5913 11.5 17 11.5C15.4087 11.5 13.8826 12.1321 12.7574 13.2574C11.6321 14.3826 11 15.9087 11 17.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
         </div>
              </SwiperSlide>

        </Swiper>
    </>
  )
}

export default Slider2