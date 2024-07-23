import left from '../../assets/about.jpg'
import right from '../../assets/wedding caterer.jpg.webp'

const AboutUs = () => {
  return (
    <div className=" shadow-xl shadow-purple-500/70 mt-7 mb-16 bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500">
      <div className="h-56 flex">
        <div className="flex flex-1 m-8 gap-3">
          <div><img className='h-40' src={left} alt="" /></div>
          <div className='flex flex-1 flex-col'>
            <span className='font-sans font-bold text-xl text-white'>Plan your wedding with minimum budget</span>
            <span className='text-slate-200 text-sm font-serif'>Planning a low-budget Indian wedding involves strategic decisions that balance celebration with financial prudence. Start by setting clear priorities—identify the essential elements like venue, catering, and outfits.</span>
          </div>
        </div>
        <div className="flex flex-1 m-8 gap-3">
          <div><img className='h-40' src={right} alt="" /></div>
          <div className='flex flex-1 flex-col'>
            <span className='font-sans font-bold text-xl text-white'>Plan your wedding with best services</span>
            <span className='text-slate-200	 text-sm font-serif'> Plan My Wedding offers professional wedding planning services to help couples plan their dream wedding. The experienced team of professionals will help you plan and organize your event from start to finish.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
