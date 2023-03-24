import Header from "./components/Header";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";

export default function App() {

  return (
    <>
      <div id="home" className="relative w-full mb-28 md:mb-30">
         <div className="relative z-30 w-full">
          <Header/>
          <div className="mainCont flex items-center justify-center flex-col text-center py-12">
            <img src="/images/logo2.png" alt="logo" />
            <div className="text-main2 text-[18px] mt-5 max-w-[700px] mb-10">Tailoring Custom Packages to Suit Your Needs: Personalized Pricing Based on Your Unique Service Requirements</div>
            <div className="flex items-center justify-center flex-col sm2:flex-row gap-3 mb-14 w-full">
              <a href="#contact" className="btnBackground transition hover:-translate-y-[3px] px-6 py-3 rounded-[4px] text-black w-full sm2:w-fit flex items-center justify-center gap-3">Book Now <svg width="18" height="13" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1 13.9L23 7.5L17.1 1M23 7.4H0" stroke="black" stroke-width="1.5"/></svg></a>
              <a href="tel:+123456789" className="bg-transparent transition hover:-translate-y-[3px] border-2 border-double border-[#FFF5E4] px-6 py-[10px] rounded-[4px] text-[#FFF5E4] w-full sm2:w-fit flex items-center justify-center gap-3">Call Now <svg width="18" height="13" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.1 13.9L23 7.5L17.1 1M23 7.4H0" stroke="#FFF5E4" stroke-width="1.5"/></svg></a>
            </div>

            <div className="text-white uppercase text-[20px] mb-6">Find US on Social Media</div>
            <div className="flex items-center justify-center gap-5">
              <a href="#" className="transition hover:-translate-y-[3px]"><svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9C1.5 6.87827 2.34285 4.84344 3.84315 3.34315C5.34344 1.84285 7.37827 1 9.5 1H25.5C27.6217 1 29.6566 1.84285 31.1569 3.34315C32.6571 4.84344 33.5 6.87827 33.5 9V25C33.5 27.1217 32.6571 29.1566 31.1569 30.6569C29.6566 32.1571 27.6217 33 25.5 33H9.5C7.37827 33 5.34344 32.1571 3.84315 30.6569C2.34285 29.1566 1.5 27.1217 1.5 25V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.5 17C11.5 18.5913 12.1321 20.1174 13.2574 21.2426C14.3826 22.3679 15.9087 23 17.5 23C19.0913 23 20.6174 22.3679 21.7426 21.2426C22.8679 20.1174 23.5 18.5913 23.5 17C23.5 15.4087 22.8679 13.8826 21.7426 12.7574C20.6174 11.6321 19.0913 11 17.5 11C15.9087 11 14.3826 11.6321 13.2574 12.7574C12.1321 13.8826 11.5 15.4087 11.5 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <a href="#" className="transition hover:-translate-y-[3px]"><svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.5 0.25H10.5C7.91414 0.25 5.43419 1.27723 3.60571 3.10571C1.77723 4.93419 0.75 7.41414 0.75 10V28C0.75 30.5859 1.77723 33.0658 3.60571 34.8943C5.43419 36.7228 7.91414 37.75 10.5 37.75H28.5C31.0859 37.75 33.5658 36.7228 35.3943 34.8943C37.2228 33.0658 38.25 30.5859 38.25 28V10C38.25 7.41414 37.2228 4.93419 35.3943 3.10571C33.5658 1.27723 31.0859 0.25 28.5 0.25ZM20.25 36.25V23.5C20.25 23.3011 20.171 23.1103 20.0303 22.9697C19.8897 22.829 19.6989 22.75 19.5 22.75H15.75V18.25H19.5C19.6989 18.25 19.8897 18.171 20.0303 18.0303C20.171 17.8897 20.25 17.6989 20.25 17.5V11.5C20.25 10.5054 20.6451 9.55161 21.3484 8.84835C22.0516 8.14509 23.0054 7.75 24 7.75H30V12.25H27C26.4033 12.25 25.831 12.4871 25.409 12.909C24.9871 13.331 24.75 13.9033 24.75 14.5V17.5C24.75 17.6989 24.829 17.8897 24.9697 18.0303C25.1103 18.171 25.3011 18.25 25.5 18.25H30V22.75H25.5C25.3011 22.75 25.1103 22.829 24.9697 22.9697C24.829 23.1103 24.75 23.3011 24.75 23.5V36.25H20.25ZM36.75 28C36.75 30.188 35.8808 32.2865 34.3336 33.8336C32.7865 35.3808 30.688 36.25 28.5 36.25H26.25V24.25H30.75C30.9489 24.25 31.1397 24.171 31.2803 24.0303C31.421 23.8897 31.5 23.6989 31.5 23.5V17.5C31.5 17.3011 31.421 17.1103 31.2803 16.9697C31.1397 16.829 30.9489 16.75 30.75 16.75H26.25V14.5C26.25 14.3011 26.329 14.1103 26.4697 13.9697C26.6103 13.829 26.8011 13.75 27 13.75H30.75C30.9489 13.75 31.1397 13.671 31.2803 13.5303C31.421 13.3897 31.5 13.1989 31.5 13V7C31.5 6.80109 31.421 6.61032 31.2803 6.46967C31.1397 6.32902 30.9489 6.25 30.75 6.25H24C22.6076 6.25 21.2723 6.80312 20.2877 7.78769C19.3031 8.77226 18.75 10.1076 18.75 11.5V16.75H15C14.8011 16.75 14.6103 16.829 14.4697 16.9697C14.329 17.1103 14.25 17.3011 14.25 17.5V23.5C14.25 23.6989 14.329 23.8897 14.4697 24.0303C14.6103 24.171 14.8011 24.25 15 24.25H18.75V36.25H10.5C8.31196 36.25 6.21354 35.3808 4.66637 33.8336C3.11919 32.2865 2.25 30.188 2.25 28V10C2.25 7.81196 3.11919 5.71354 4.66637 4.16637C6.21354 2.61919 8.31196 1.75 10.5 1.75H28.5C30.688 1.75 32.7865 2.61919 34.3336 4.16637C35.8808 5.71354 36.75 7.81196 36.75 10V28Z" fill="white"/></svg></a>
              <a href="#" className="transition hover:-translate-y-[3px]"><svg width="39" height="30" viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 9C1.5 6.87827 2.34285 4.84344 3.84315 3.34315C5.34344 1.84285 7.37827 1 9.5 1H29.5C31.6217 1 33.6566 1.84285 35.1569 3.34315C36.6571 4.84344 37.5 6.87827 37.5 9V21C37.5 23.1217 36.6571 25.1566 35.1569 26.6569C33.6566 28.1571 31.6217 29 29.5 29H9.5C7.37827 29 5.34344 28.1571 3.84315 26.6569C2.34285 25.1566 1.5 23.1217 1.5 21V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 9L25.5 15L15.5 21V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            </div>
          </div>
         </div>

         <img src="/images/img-hero.png" className="absolute top-0 left-0 w-full h-full object-cover object-bottom" alt="background" />
      </div>


      <div id="services" className="mainCont text-white pt-2">
      <div className="relative mb-16">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">Our Services</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
      </div>

       <div>
       <div id="wedding" className="flex items-start gap-6 w-full flex-col md2:flex-row mb-10">
        <img src="/images/wedding1.png" alt="wedding" className="w-full md2:w-[350px]" />
        <div>
          <div className="text-main2 text-[28px] sm:text-[36px] uppercase font-[500] mb-2">Weddings</div>
          <div className="leading-[26px]">We offer a personalized approach to ensure that your special day is everything you've dreamed of and more. We work closely with you to create the perfect soundtrack for your ceremony, cocktail hour, and reception, and our professional DJs will keep the dance floor packed all night long.</div>
          <div className="flex flex-col sm3:flex-row gap-3 mt-8">
              <a href="#contact" className="btnBackground transition hover:-translate-y-[3px] px-6 py-3 rounded-[4px] text-black w-full sm3:w-fit">Get a quote</a>
              <a href="tel:+123456789" className="bg-transparent transition hover:-translate-y-[3px] border-2 border-double border-main px-6 py-[10px] rounded-[4px] text-main w-full sm3:w-fit">Call Now</a>
          </div>
        </div>
       </div>

       <div className="w-full h-[1px] bg-[#FFE38F1F] mb-10"></div>

       <div id="event" className="flex items-start gap-6 w-full flex-col md2:flex-row mb-10">
        <img src="/images/wedding2.png" alt="wedding" className="w-full md2:w-[350px]" />
        <div>
          <div className="text-main2 text-[28px] sm:text-[36px] uppercase font-[500] mb-2">Corporate Events</div>
          <div className="leading-[26px]">We understand the importance of making a lasting impression on your clients or employees. That's why we offer a variety of music and entertainment options, including customized playlists and live performances, to create a memorable and engaging experience.</div>
          <div className="flex flex-col sm3:flex-row gap-3 mt-8">
            <a href="#contact" className="btnBackground transition hover:-translate-y-[3px] px-6 py-3 rounded-[4px] text-black w-full sm3:w-fit">Get a quote</a>
            <a href="#contact" className="bg-transparent transition hover:-translate-y-[3px] border-2 border-double border-main px-6 py-[10px] rounded-[4px] text-main w-full sm3:w-fit">Book a consultation</a>
          </div>
        </div>
       </div>

       <div className="w-full h-[1px] bg-[#FFE38F1F] mb-10"></div>

       <div className="flex items-start gap-6 w-full flex-col md2:flex-row">
        <img src="/images/wedding3.png" alt="wedding" className="w-full md2:w-[350px]" />
        <div>
          <div className="text-main2 text-[28px] sm:text-[36px] uppercase font-[500] mb-2">Other Events</div>
          <div className="leading-[26px]">Whether it's a birthday party, school event, Christmas party, stag and doe, fundraiser, or private event, we have the experience and expertise to make it a success. Our DJs are skilled at reading the crowd and playing the perfect mix of music to keep your guests entertained and engaged.</div>
          <div className="flex flex-col sm3:flex-row gap-3 mt-8">
            <a href="#contact" className="btnBackground transition hover:-translate-y-[3px] px-6 py-3 rounded-[4px] text-black w-full sm3:w-fit">Get a quote</a>
            <a href="#contact" className="bg-transparent transition hover:-translate-y-[3px] border-2 border-double border-main px-6 py-[10px] rounded-[4px] text-main w-full sm3:w-fit">Book a consultation</a>
          </div>
        </div>
       </div>
       </div>

  
       <div className="mt-28">
       <div className="relative mb-12">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">About Us</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
       </div>
       <div className="text-center leading-[26px]">From classic hits to modern jams, we have an extensive collection of music that caters to every age group and genre. Our sound engineers use the latest technology and equipment to ensure that the sound quality is crystal clear and impactful.<br/><br/>Our DJ services go beyond just playing music, we also provide a range of lighting and visual effects that add to the overall experience. We work closely with event planners and organizers to ensure that everything runs smoothly and seamlessly.<br/><br/>In short, Sound Lab Entertainment is your one-stop-shop for all your DJ needs. We bring a touch of creativity, expertise, and innovation to every event we DJ, and we guarantee that your guests will be talking about the music for weeks to come.</div>
       </div>


       <div className="mt-20">
       <div className="relative mb-12">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">Galleries</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
       </div>

       <div className="grid grid-cols-1 lg3:grid-cols-2 gap-3">
         <div className="grid sm:grid-rows-[370px,300px] gap-3">
            <img src="/images/image1.png" className="w-full h-full object-cover object-center mb-3" />
            <img src="/images/image2.png" className="w-full h-full object-cover object-center" />
         </div>

         <div className="grid sm:grid-rows-[200px,470px] gap-3">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full overflow-hidden">
         <img src="/images/image4.png" className="w-full h-full object-cover object-center" />
         <img src="/images/image3.png" className="w-full h-full object-cover object-center" />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full overflow-hidden">
         <img src="/images/image5.png" className="w-full h-full object-cover object-center" />
         <img src="/images/image6.png" className="w-full h-full object-cover object-center" />

         </div>

         </div>

       </div>
       
       </div>





       <div id="about" className="relative mt-36">
       <div className="relative mb-12">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">What people say</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
       </div>
         <Slider/>
       </div>


       <div className="relative mt-32">
       <div className="relative mb-16">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">Our Affiliates</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
       </div>

       <Slider2/>
       </div>



       <div id="contact" className="relative mt-36">
       <div className="relative mb-10">
        <div className="customFont relative text-[30px] font-[600] bg-black w-fit mx-auto text-center px-5 sm:px-10 z-20 text-[#FDF0C8] leading-none">Contact us</div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[1px] bg-main"></div>
       </div>
         <div className="text-center text-[#FFFCF5CC] mb-6">For business inquiries please fill this form</div>
         <div className="w-full max-w-[800px] mx-auto">

           <div className="grid grid-cols-1 sm3:grid-cols-[1fr,160px] gap-7 sm3:gap-3">
             <div>
               <div className="text-[17px] mb-1.5">Name <span className="text-[#F63232]">*</span></div>
               <input type="text" placeholder="Enter your name" className="w-full bg-[#151413] rounded-[4px] placeholder-[#9D9690] text-white px-3 py-3 ring-[#FFE38F]" />
             </div>

             <div>
               <div className="text-[17px] mb-1.5">Title <span className="text-[#F63232]">*</span></div>
               <select style={{backgroundImage: "url(/images/arrow.svg)"}} className="cursor-pointer w-full bg-[#151413] rounded-[4px] text-[#9D9690] px-3 py-3 ring-[#FFE38F]">
                <option>Select</option>
                <option>Select 1</option>
                <option>Select 2</option>
               </select>
               
             </div>
           </div>

           <div className="mt-7">
               <div className="text-[17px] mb-1.5">Email <span className="text-[#F63232]">*</span></div>
               <input type="email" placeholder="Enter your email" className="w-full bg-[#151413] rounded-[4px] placeholder-[#9D9690] text-white px-3 py-3 ring-[#FFE38F]" />
           </div>

           <div className="mt-7">
               <div className="text-[17px] mb-1.5">Message <span className="text-[#F63232]">*</span></div>
               <textarea placeholder="Anything I can help? Let me know" className="resize-none min-h-[230px] w-full bg-[#151413] rounded-[4px] placeholder-[#9D9690] text-white px-3 py-3 ring-[#FFE38F]"></textarea>
           </div>

           <button className="flex items-center justify-center py-3 rounded-[4px] w-full mt-4 bg-[#FFE38F] text-[#000201] text-[18px] transition hover:-translate-y-[3px]">Send</button>



         </div>
       </div>


       <div className="flex items-center justify-center flex-col gap-3 text-center mt-24 mb-5">
          <button className="mb-1"><img src="/images/logo.svg" alt="logo" /></button>
          <div>© 2023 Sound Lab Entertainment. All rights reserved.</div>
       </div>

      </div>
    </>
  )
}