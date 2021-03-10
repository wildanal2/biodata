import React, { Component } from 'react';
import pic1 from './../assets/picture1.png';
import pic2 from './../assets/picture2.png';
import pic3 from './../assets/picture3.png';
import pic4 from './../assets/picture4.png';

class Portofolio extends Component{
    render(){
        return(
            <>
            <div className="grid justify-items-center w-full h-56 text-center relative">
                <div className="absolute items-center text-2xl mt-8 text-yellow-300 font-normal tracking-widest ">My work</div>
                <div className="absolute items-center text-8xl -mt-3 -ml-8 text-white font-bold tracking-tight leading-loose opacity-10" style={{textShadow: '-1px -1px 0 #313131, 1px -1px 0 #313130,-1px 1px 0 #313131, 1px 1px 0 #313131' }}>portofolio</div>
                <span className="z-10 flex flex-col justify-center flex-1 text-6xl font-bold tracking-tight leading-loose">portofolio</span>
            </div>
            
            <div className="flex justify-center my-5">
                <a href="/#" className="py-1.5 px-5 mx-3 text-white bg-yellow-300 rounded-lg">All</a>
                <a href="/#" className="py-1.5 px-5 mx-3 text-gray-700 rounded-lg transition transition duration-500 ease-in-out hover:bg-yellow-300 hover:text-white">Web</a>
                <a href="/#" className="py-1.5 px-5 mx-3 text-gray-700 rounded-lg transition transition duration-500 ease-in-out hover:bg-yellow-300 hover:text-white">Mobile</a>
                <a href="/#" className="py-1.5 px-5 mx-3 text-gray-700 rounded-lg transition transition duration-500 ease-in-out hover:bg-yellow-300 hover:text-white">Desktop</a> 
            </div>
            <div className="h-full bg-gray-100 p-5 mt-3 rounded-lg">
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                    <div className="group relative">
                        <img src={pic1} className="rounded shadow-lg" alt=""/>
                        <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition duration-400 ease-in-out justify-evenly"> 
                            <div className="hover:scale-110 text-white opacity-0 transform traslate-duration-350 translate-y-3 group-hover:opacity-100 transition duration-500 ease-in-out">
                                <a href="/#">
                                    <div className="text-center text-xl">Nassert-Beet</div>
                                </a>
                                <div className="text-md">Web for Nassert beet Indonesia</div>
                            </div> 
                            {/* <button class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </button> */}
                        </div>
                    </div> 
                    <div>
                        <img src={pic2} className="rounded shadow-lg" alt=""/>
                    </div> 
                    <div>
                        <img src={pic3} className="rounded shadow-lg" alt=""/>
                    </div> 
                    <div>
                        <img src={pic4} className="rounded shadow-lg" alt=""/>
                    </div> 
                </div>
            </div>
            </>
        )
    }
}

export default Portofolio;