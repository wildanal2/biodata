import React, { Component } from 'react';

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
            <div className="h-full bg-gray-50 p-5 mt-3 rounded-lg">

            </div>
            </>
        )
    }
}

export default Portofolio;