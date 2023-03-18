import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';

const Slider = () => {

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
  
  
    const [addClass, setaddClass] = React.useState('');
  
    React.useEffect(() => {
      setTimeout(() => {
        setaddClass('z-[99]');
      }, 1000);
    }, []);
  
    let data = [
      {
        id: 1,
        image: "/images/cause1.png",
        title: "Fondation Jean-Neveu",
        date: "Since 2011",
      },

      {
        id: 2,
        image: "/images/cause2.png",
        title: "Cause pour la Cause",
        date: "Since 2017",
      },

      {
        id: 3,
        image: "/images/cause3.png",
        title: "Fondation St-Paul",
        date: "Since 2010",
      },

      {
        id: 4,
        image: "/images/cause4.png",
        title: "Optimist Club",
        date: "Since 1965",
      },


      {
        id: 5,
        image: "/images/Fondation/Action Sport Physio.png",
        title: "Action Sport Physio",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 6,
        image: "/images/Fondation/au-second-lieu-logo-220x75-01.svg",
        title: "Au Second Lieu",
        date: "Since 1965",
        big_image: true,
      },

      {
        id: 7,
        image: "/images/Fondation/BCC_LOGO_HZ_FC_POS_CMYK_TM_EN1.png",
        title: "BCC",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 8,
        image: "/images/Fondation/Centraide_United_Way_Canada_horizontal.png",
        title: "Centraide United",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 9,
        image: "/images/Fondation/Fondation Eulalie-Durocher.png",
        title: "Fondation Eulalie-Durocher",
        date: "Since 1965",
        big_image: true,
      },

      {
        id: 10,
        image: "/images/Fondation/Fondation Hopital Charles-Lemoyne.png",
        title: "Fondation Hopital",
        date: "Since 1965",
        big_image: true,
      },

      {
        id: 11,
        image: "/images/Fondation/Fondation-Charles-Bruneau_logo_RGB.png",
        title: "Fondation Charles Bruneau",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 12,
        image: "/images/Fondation/LeGrandDefi.png",
        title: "LeGrand sDefi",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 13,
        image: "/images/Fondation/logo-35ans-white.png",
        title: "35ans White",
        date: "Since 1965",
        big_image: true,
      },

      {
        id: 14,
        image: "/images/Fondation/Pierre-Boucher.png",
        title: "Pierre Boucher",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 15,
        image: "/images/Fondation/share.png",
        title: "Share",
        date: "Since 1965",
        big_image: true,
      },


      {
        id: 16,
        image: "/images/Fondation/Telus.png",
        title: "Telus",
        date: "Since 1965",
        big_image: true,
      },


      

     
    ];


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
          {data.map((ele) => {
            return (
              <SwiperSlide
                key={ele.id}
                className='transition rounded-lg block overflow-hidden relative px-5 mt-7 md:mt-0'
              >
                <div className='flex items-center justify-center flex-col text-center max-w-[800px] mx-auto'>
                 <img src="/images/stars.svg" className='w-[130px] mb-4' alt="stars" />
                 <div className='text-[#C29A54] text-[17px] mb-3'>I love the services sound lab provided! they did super awesome music!</div>
                 <div className='text-[#FDF0C8] mb-7'>Sound Lab is simply amazing! We hired them for our wedding and they exceeded all our expectations. They was professional, reliable, and truly brought the party to life. Their music selection was on point.</div>
                 <img src="/images/review.png" alt="person" className='w-[100px] mb-3' />
                 <div className='text-[22px] text-[#C29A54] font-[700] mb-1'>Travers Langelier</div>
                 <div className='text-[#FDF0C8]'>Fantasia, Co. Owner</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
    </>
  )
}

export default Slider