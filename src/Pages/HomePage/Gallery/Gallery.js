import React from 'react';
import './Gallery.css'
import g1 from '../../../img/g-1.jpg'
import g2 from '../../../img/g-2.jpg'
import g3 from '../../../img/g-3.jpg'
import g4 from '../../../img/g-4.jpg'
import g5 from '../../../img/g-5.jpg'
import g6 from '../../../img/g-6.jpg'
import g7 from '../../../img/g-7.jpg'
import g8 from '../../../img/g-8.jpg'
import g9 from '../../../img/g-9.jpg'
const Gallery = () => {
    return (
        <div className='container  mb-5' style={{ marginTop: '5rem' }}>
            <h1 className='mb-5 text-white head'>

                <span>G</span>
                <span>A</span>
                <span>L</span>
                <span>L</span>
                <span>E</span>
                <span>R</span>
                <span>Y</span>

            </h1>
            <div className=" align-items-center  box-container ">
                <div className=" box">
                    <img className='' src={g1} alt="" />
                    <div className="contennt">
                        <p> “The world is a book and those who do not travel read only one page.”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g2} alt="" />
                    <div className="contennt">
                        <p>“Life is either a daring adventure or nothing at all” </p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g3} alt="" />
                    <div className="contennt">
                        <p>“Take only memories, leave only footprints”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g4} alt="" />
                    <div className="contennt">
                        <p>“Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts.”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g5} alt="" />
                    <div className="contennt">
                        <p>” The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g6} alt="" />
                    <div className="contennt">
                        <p>“Like all great travellers, I have seen more than I remember and remember more than I have seen.”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g7} alt="" />
                    <div className="contennt">
                        <p>“Travel makes one modest, you see what a tiny place you occupy in the world.”</p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g8} alt="" />
                    <div className="contennt">
                        <p> “Twenty years from now you will be more disappointed by the things you didn't do than by the ones you did do” </p>
                    </div>
                </div>
                <div className=" box">
                    <img className='' src={g9} alt="" />
                    <div className="contennt">
                        <p>“Like all great travellers, I have seen more than I remember and remember more than I have seen.”</p>
                    </div>
                </div>




            </div >
        </div >
    );
};

export default Gallery;