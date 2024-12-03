"use client";

import { JetBrains_Mono } from 'next/font/google'

const jetbrains_800weight = JetBrains_Mono({
    weight: '800',
    subsets: ['latin'],
  })
  

export default function MobileWarning() {
    return (<>
        <div className="fixed w-[100%] h-[100%] top-0 left-0 z-10 items-center blurBg flex justify-around content-center hideOnLoad aspectRatioIndicatorContainer" id="mobileWarning">
        <div className={"w-[40vh] h-[40vh] doublePadded border-white border-solid border-2 p-2 rounded-2xl flex-col flex justify-around content-center" + " " + jetbrains_800weight.className} >
          <div className="flex justify-center">
           <h2>Sorry mobile users.</h2>
          </div>
          <br />
          <h3>
            Unfortunately, it is very difficult to design a website for both mobile and desktop. Don&#39;t worry though - you can still see this website, just remember that the design may not be perfect.
          </h3>
          <h4>
            Thank you for your consideration,
            <br />
            <br />
            ​     InternetBowser
          </h4>
          <div className="flex justify-center">
            <button className="m-2 p-2 border-white border-solid border-2 rounded-2xl" id="hideMobileWarningButton">I understand</button>
          </div>
        </div>
      </div>

      <script>
        {`
          const hideMobileWarningButton = document.getElementById("hideMobileWarningButton");

          const mobileWarning = document.getElementById("mobileWarning");

          function hideMobileWarningWithLocalStorage() {
            console.log(localStorage.getItem('hiddenMobileWarning'))
            if (localStorage.getItem('hiddenMobileWarning') == "true") {
              console.log("class added")
              mobileWarning.classList.add("hidden"); 
              console.log("class added")
            }
          }

          let intervalId = setInterval(hideMobileWarningWithLocalStorage, 100);
          
          setTimeout(() => {
            clearInterval(intervalId);
          }, 5000); 

          window.onload = (event) => {
            hideMobileWarningWithLocalStorage();
          };


          



          hideMobileWarningButton.addEventListener("click", function() {

            localStorage.setItem('hiddenMobileWarning', "true");

            mobileWarning.classList.add("hidden"); 

          });
        `}


      </script>
    </>);
}