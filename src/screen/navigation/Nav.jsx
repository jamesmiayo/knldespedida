import React, { useState } from 'react';
import './nav.css';
import { FaPlane } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import barcode from '../../img/barcode.png';

import img_mau from '../../img/mau.jpg';
import img_mavic from '../../img/mavic.jpg';
import img_seeker from '../../img/seeker.jpg';
import img_miel from '../../img/miel.jpg';
import img_michanne from '../../img/michanne.jpg';
import img_aimee from '../../img/aimee.jpg';

const Nav = () => {
  let data = [
    {
      id: 1,
      imgSrc: img_mau,
      to: 'Nikki and Kevin',
      message:
        'Hi ate niks&kuya kevin this photo taken 1yr ago sept 21,2022 ♥️ bday treat nyo sakin sa tagaytay thankyou sainyo 💗 ksi kht sobrng busy nyo lagi kayong naglalaan ng time pra makasama/makabonding nyo kmi. Thankyou po for everything!! ♥️♥️♥️ Goodluck on your new adventure&& Wishing you all the success in your new life ✨',
      from: '-Mau',
    },
    {
      id: 2,
      imgSrc: img_mavic,
      to: 'Ate Nikki',
      message:
        'Surprise!!! Ang payat natin dito sa pic na ito, ehhe... Isa ito sa mga unang pics natin dalawa, and I am grateful na nakilala kita at nakasama kita sa journey ko bilang SFC. You know that I look up to you bilang isang kristyano at syempre bilang isang leader sa community. Minsan nga namimiss kita sa mga ganaps at sa mga household kasi wala naman din ako makausap o mapagkakatiwalaan kung minsan hehehe... Anyways ate, I am happy kasi finally natupad na din yung isa sa mga life goals mo na makapag abroad, pero this time for good na kayo ni Kuya Kevin sa Canada, I wish happiness and a lot of opportunity san man kayo mapadpad. Dont worry ate, ipagpepray namin kayo sa bagong journey na tatahakin ninyo. Yun lang... God Bless You and your Future Family, Von Voyage 😊',
      from: '-Mavic',
    },
    {
      id: 3,
      imgSrc: img_seeker,
      to: 'Lods Kevin',
      message:
        'Lods, ikaw nag patunay na hindi porket may tattoo masamang tao. Thank you love este lods sa mga bagay na na experience ko kasama ka, one thing na di ko makakalimutan yung oldnapped nyo ko papuntang tagaytay ng naka sando, hindi ko makakalimutan yung part na alam mong need ni papa ng buko para mag clense and binilhan mo sya. Extended sa family ko yung mga tulong na nabibigay mo saken. Praying sa success and safe travel/work nyo abroad. mamimiss ko mga gala naten. labyu bro.',
      from: '-Seeker',
    },
    {
      id: 4,
      imgSrc: img_miel,
      to: '',
      message: '',
      from: '-Miel',
    },
    {
      id: 5,
      imgSrc: img_michanne,
      to: 'Nikki',
      message:
        'Hi Nikki, We thank God for giving us a sister like you. Salamat sa gift of service thru SFC na makasama ka namin. You treat us Tres Marias (Vite Sisters) like your own siblings (parehas kayo ni Normae) and thankful kami dun kasi sobrang smooth saling kahit may ups and downs din yung chapter natin parang with you nagiging continuos ang flow natin to serve. You also grow being a wonderful woman as you are right now. Take care always.',
      from: '-Michanne',
    },
    {
      id: 6,
      imgSrc: img_aimee,
      to: 'Ate Nikki',
      message:
        'Happy trip Niks and Kevin. God bless sa new journey nyong dalawa. See you kapag namasyal ako sa Australia. 😁 ❤️',
      from: '-Aimee',
    },

    // {
    //   id: 3,
    //   imgSrc: img_mavic,
    //   to: 'Ate Nikki',
    //   message: '',
    //   from: '-Mavic',
    // },
  ];

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} alt={tempimgSrc} />
        <FaWindowClose onClick={() => setModel(false)} />
      </div>

      <div className="container">
        <div className="nav">
          <div className="bloc-tabs">
            <div
              className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(1)}
            >
              <h3>Home</h3>
            </div>
            <div
              className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(2)}
            >
              <h3>Map</h3>
            </div>
            <div
              className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
              onClick={() => toggleTab(3)}
            >
              <h3>Message</h3>
            </div>
          </div>
        </div>
        <div className="content-tabs">
          <div className={toggleState === 1 ? 'active-content' : 'content'}>
            <div className="container about__container">
              <div className="title">
                <h2>THEY ARE READY TO GO! </h2>
                <h1>Kevin & Nikki's</h1>
                <h1> Despedida Party</h1>
                <h3>October 14, 2023 | 4:00 PM</h3>
                <h3>Monalisa Kitchen</h3>
                <h4>(98 E Dela Paz St., San Roque, Marikina City)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 2 ? 'active-content' : 'content'}>
          <div className="map">
            <h2>Map to MONALISA KITCHEN</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.5653744636661!2d121.0978207903299!3d14.626227869289101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8373c9418d1%3A0x6287306b864307eb!2s98%20E%20dela%20Paz%20St%2C%20Marikina%2C%201800%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1695806142550!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map2"
              frameBorder="0"
            ></iframe>
          </div>

          <div className="map2">
            <h2>Map to PARKING</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341.2253862183919!2d121.09779210213009!3d14.626139354716202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9c1fd1b39c5%3A0xba0fea3f975bc2b!2sMonalisa%20Kitchen%20Parking!5e0!3m2!1sen!2sph!4v1696856120011!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map2"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <div className={toggleState === 3 ? 'active-content' : 'content'}>
          {data.map((item, index) => {
            return (
              <div className="card__message" key={index}>
                <div className="card__title">
                  <h1>
                    Boarding Pass{' '}
                    <span>
                      <FaPlane className="icon-plane" size={30} />
                    </span>
                  </h1>
                </div>
                <div className="card__detail">
                  <div className="card__details">
                    <h3>To: {item.to} </h3>
                    <h5>{item.message}</h5>
                    <h3>{item.from}</h3>
                    <div>
                      <img
                        src={barcode}
                        alt="barcode"
                        className="barcode"
                      ></img>
                    </div>
                  </div>
                  <div className="card__info">
                    <div className="pics" onClick={() => getImg(item.imgSrc)}>
                      <img
                        src={item.imgSrc}
                        alt={item.imgSrc}
                        className="img"
                      ></img>
                    </div>

                    <h3>First Class</h3>
                    <h3>AUS 308</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
