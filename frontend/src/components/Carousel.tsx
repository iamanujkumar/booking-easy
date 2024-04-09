import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Carousel({children:slides,
  autoSlide=false,
  runtime=1000,
}) {
  const [curr,setCurr]=useState(0);

  const prev=()=>{
    curr==0?setCurr(slides.length-1):setCurr(curr-1);
  }
  const next=()=>{
    curr==slides.length-1?setCurr(0):setCurr(curr+1);
  }

  useEffect(()=>{
    if(!autoSlide)return ;
    const autoSlideSession=setInterval(next,runtime);
    return ()=>clearInterval(autoSlideSession);
  },[next])


  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500"style={{transform:`translateX(-${curr*100}%)`}}>{slides}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}className="p-1 rounded-full shadow bg-white/50 text-gray hover:bg-white">
          <SlArrowLeft size={40}/>
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/50 text-gray hover:bg-white"  >
          <SlArrowRight size={40}/>
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center items-center gap-2">
          {slides.map((_,i)=>(
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr==i?"p-2":"bg-opacity-50"}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel