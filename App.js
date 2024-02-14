import React, { useState } from 'react';
import './App.css';
import Flower from './Flower';



function App() {
  
  const [showMessage, setShowMessage] = useState(false);
  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };
 
  

  const createPetals = () => {
    let petals = [];
    for (let i = 0; i < 20; i++) {
      const duration = Math.random() * (15 - 5) + 5; 
      const delay = Math.random() * -10; // Start with a delay to scatter the petals
      const left = Math.random() * 100; // Randomize starting position across the screen
      const rotation = Math.random() * 360; // Initial rotation
  
      petals.push(
        <div
          key={i}
          className="petal"
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            left: `${left}%`,
            transform: `rotate(${rotation}deg)`, // Initial rotation applied here
          }}
        ></div>
      );
    }
    return petals;
  };
  

  return (
    <div className="container">
      <div className="background-elements">

      <Flower />
        {[...Array(9)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
      <div className="heart" onClick={toggleMessage}></div> {/* Add onClick handler here */}
      {showMessage && <p className="love-message">"Kay ni click man kas heart librehan ko nimo ron HAHAHAHAHAHA</p>}
      <h1>Happy Valentine's Day Langggaaaaa!</h1>
      <h2>"Grateful for your love, my sunshine. I love you always and thank you for being so understanding to me."</h2>
      <div className="photo-gallery">
      <img src="https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/411878994_1069396260843686_7532558437444891488_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s851x315&_nc_cat=105&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeEEewLLr8yCd_wffMW52yoXxkXV3mXmSl_GRdXeZeZKX1PI2VzROT1dzkfff8oFNUWLyDjSBsjRsCT_6V9nt_HP&_nc_ohc=FT8T7Lm3m6kAX86D6Ao&_nc_ht=scontent.filo1-1.fna&oh=00_AfCX47aK0MrZzhd_TA51lNQ5xekk5j0y0HRBMSgRAMhOug&oe=65CF6293" alt="Memory 1" className="photo photo1"/>
      <img src="https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/411951248_1069396347510344_8292682579045346465_n.jpg?stp=c0.169.1536.1536a_cp6_dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=3d9721&_nc_eui2=AeFnJc0Qo0yFrvchOlobvLzZhlqUCUAr9IeGWpQJQCv0h9y-meETOhas7BZ97N1fKVt6lp0M6v1C77RJ8vby3Eh4&_nc_ohc=536A40Kkn18AX8llboT&_nc_ht=scontent.filo1-1.fna&oh=00_AfCG2rpgkdVni2Sne5FU5ujMLQWv7-SppMIhJmyIVvltkg&oe=65CF822C" alt="Memory 1" className="photo photo1"/>

      <img src="https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/410996943_1069396314177014_3068569948820131649_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHUexxiagmM4GU-qF-HqXCZKVyGhE-yu0cpXIaET7K7RwtD302DVUyemj2PKxFJunvRGEMAtxdD62EjjqhN6b-N&_nc_ohc=IOWSopwxnPIAX9aoZd6&_nc_ht=scontent.filo1-1.fna&oh=00_AfD3Utb4QqZ0VnXGTuKH7LI0om7yllyTsHKxLcAT2nnMWA&oe=65CFD100" alt="Memory 1" className="photo photo1"/>
      <img src="https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/419678711_425832936434636_437327653073367742_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeErSLtFAdjlJ6_AV88-5y65sdbg5kuv79qx1uDmS6_v2sfSfR4AU30cMviXpZmPRIFZXsmKPk_JfoK30YyhYgmF&_nc_ohc=26EjLR490pUAX--gBck&_nc_ht=scontent.filo1-1.fna&oh=00_AfBkqYVVSsItbY1RP-JJY4L6e0LzP7EdFXjW_Kzz91u_GQ&oe=65D12C75" alt="Memory 1" className="photo photo1"/>
      <img src="https://scontent.filo1-1.fna.fbcdn.net/v/t39.30808-6/410930773_1069396220843690_7266155465645396142_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHLsgz6MQQGp5t1Ou50VhKzIZFLZaACd0ohkUtloAJ3SvvBA92BC3dr7HvYacb_zxy6mgxZFhBonv4gLl1uLuyf&_nc_ohc=m2i3F3FlkdUAX_qrvvg&_nc_ht=scontent.filo1-1.fna&oh=00_AfCIXwbYUYZbH98327TSPRj_P4vfDFGkPUZs6tOW2B0ixQ&oe=65D060CD" alt="Memory 1" className="photo photo1"/>
      <img src="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/376697062_1015097672940212_2155867038199083672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFzMLPGpARmud14xN6h8FpsqCCl1_obvaqoIKXX-hu9qgntdNIG8_u8DrSw_YddOVC5l1x2a3TllwZpmm-KncK_&_nc_ohc=TZRJBhAnbLIAX_BpuIz&_nc_ht=scontent.fceb3-1.fna&oh=00_AfCSx1vJzl2xcYSD9U_oWMmOiM6-D_SGRkSA7GxcWIIomQ&oe=65D063E0" alt="Memory 1" className="photo photo1"/>
        <img src="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/341609937_527687269348430_3215508036904086677_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFKo2_sxAtrGfwrESp1EpSgWhh6JcgB7A5aGHolyAHsDsAxGh-SQ8aJ5oEY3IiLaftC0WNSh3ZuAQx8WDQWN0nI&_nc_ohc=YIcfsWd_cmYAX-rtuFM&_nc_ht=scontent.fceb3-1.fna&oh=00_AfB9LR3LqY0YaAU2CeEe92lk_qdalmZTbiNfaYqwe8uDAQ&oe=65CFE247" alt="Memory 2" className="photo photo2"/>      </div>

      {createPetals()}
      

<div class="flower">
        <div class="f-wrapper">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--2">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
            </div>
        </div>

        <div class="f-wrapper f-wrapper--3">
            <div class="flower__line"></div>
            <div class="f">
                <div class="flower__leaf flower__leaf--1"></div>
                <div class="flower__leaf flower__leaf--2"></div>
                <div class="flower__leaf flower__leaf--3"></div>
                <div class="flower__leaf flower__leaf--4"></div>
                <div class="flower__leaf flower__leaf--5"></div>
                <div class="flower__leaf flower__leaf--6"></div>
                <div class="flower__leaf flower__leaf--7"></div>
                <div class="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
            </div>
        </div>
        <div class="flower__glass"></div>
    </div>


    </div>
  );
}

export default App;
