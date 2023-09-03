import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'

//import '../style/pages/partner.css';

export default function PartnersPage() {
    return (
    <div className='w-full lg:h-4/5' id='Partners'>
        <h1 className='text-3xl italic font-semibold text-center text-black font-poppins md:text-6xl lg:pt-16 py-7'>Yhteistyökumppanit</h1>
        <div className='block w-full px-5 overflow-hidden lg:flex lg:px-20'>
            <a  href='/partners/sykekotipalvelut'
                className='w-full lg:w-1/2 lg:px-10 hover:cursor-pointer'> 
            <div className=''>
                <h1 className='text-2xl italic font-bold text-center underline lg:text-6xl md:text-5xl font-poppins lg:mt-20 md:mt-8'>Syke Kotipalvelut</h1>
                <p className='px-3 mt-3 text-lg font-light text-center md:text-left font-poppins lg:mt-10 md:mt-6 lg:text-3xl md:text-2xl lg:px-0 md:px-20'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                </p>
            </div>
            <img className='object-contain w-1/2 mx-auto mt-3 mb-10 md:mt-7 md:w-2/5 lg:w-1/3 lg:mb-0 md:mb-20' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
            </a>
            <a  href='/partners/sykekotipalvelut'
                className='w-full lg:w-1/2 lg:px-10 hover:cursor-pointer'> 
            <div className=''>
                <h1 className='text-2xl italic font-bold text-center underline lg:text-6xl md:text-5xl font-poppins lg:mt-20 md:mt-8'>Korjausvelkalaskuri</h1>
                <p className='px-3 mt-3 text-lg font-light font-poppins lg:mt-10 md:mt-6 lg:text-3xl md:text-2xl lg:px-0 md:px-20'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                </p>
            </div>
            <img className='object-contain w-1/2 mx-auto mt-3 mb-10 md:mt-7 md:w-2/5 lg:w-1/3 lg:mb-0 md:mb-20' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
            </a>
        </div>
    </div>
    );
}

{/* 
    <div className='w-full pb-20 bg-white' id='Partners'>
        <h1 className='text-black text-center font-poppins md:text-7xl text-4xl pt-[10vh] font-semibold italic 2xl:px-24'>Yhteistyökumppanit</h1>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <div className='ml-20'>
            <h1 className='mt-20 text-4xl italic font-bold xl:text-6xl font-poppins'>Syke Kotipalvelut</h1>
            <p className='text-4xl font-poppins font-extralight'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
            <img className='object-contain w-1/4 ml-10 mr-20' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
        </div>
        </a>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <img className='object-contain w-1/4 mx-28' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
            <div>
            <h1 className='mt-20 text-4xl italic font-bold xl:text-6xl font-poppins'>Korjausvelkalaskuri</h1>
            <p className='text-4xl font-poppins font-extralight'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
        </div>
        </a>
    </div>





<div className="2xl:h-[80vh]">
<h1 className='text-black text-right font-poppins md:text-7xl text-4xl pt-[10vh] font-semibold italic 2xl:px-24'>Yhteistyökumppanit</h1>
<div
  id="Partners"
  className="flex justify-center w-2/3 mx-auto mt-20"
>
  <Link to="/partners/sykekotipalvelut" className="w-1/3 aspect-square">
    <img
      className="object-contain w-full h-full px-10 hover:cursor-pointer"
      alt="Partner Image"
      src="https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png"
    ></img>
  </Link>
  <Link
    to="/partners/korjausvelkalaskuri"
    className="w-1/3 aspect-square brightness-50"
  >
    <img
      className="object-contain w-full h-full px-10 hover:cursor-pointer"
      alt="Partner Image"
      src="https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp"
    ></img>
  </Link>
</div>
</div> */}