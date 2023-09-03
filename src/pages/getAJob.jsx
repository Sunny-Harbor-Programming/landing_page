import missionControl from '../assets/missionControl.jpg';

export default function GetAJobPage() {
    return (
        <div id="employmentForm">
            <div className='h-[48vh] lg:mt-0 mt-5 flex flex-col justify-center'>
                <h1 className='font-poppins lg:text-7xl md:text-5xl text-4xl text-white text-center'>Hae töihin!</h1>
                <p className='lg:w-1/2 w-4/5 lg:mt-10 mt-4 font-poppins font-light mx-auto text-white text-center lg:text-3xl md:text-2xl text-base'>
                    Sunny Harbor Consulting tarjoaa oivan mahdollisuuden päästä kehittämään omaa osaamistaan ja työskentelemään mielenkiintoisten projektien parissa.
                </p>
                <img src={missionControl} className='absolute top-0 z-[-1] h-[48vh] w-full object-cover brightness-50'></img>
            </div>
            <div className="md:flex lg:mt-10 lg:mx-0 mx-3 md:mt-4 mb-10 lg:pb-20">
                <p className='font-poppins font-light lg:text-3xl md:text-xl text-base md:w-8/12 md:px-4 lg:px-20 lg:w-1/2'>
                Tarvitsemme seuraavaa osaamista tällä hetkellä:<br/>
                - Backend ohjelmointi (Golang, NodeJS)<br/>
                - Frotend ohjelmointi (TypeScript, JavaScript, HTML/CSS)<br/>
                - Moobiili ohjelmointi (Java, Kotlin, Swift)<br/>
                - Graafinen suunnittelu<br/>
                <br/>
                Jos sinulta löytyy tarvitsemaamme osaamista tai muuta osaamista, jota uskot, että voisimme käyttää, ota yhteyttä! 
                </p>
                <div className='flex justify-center md:w-3/5 lg:w-6/12 lg:px-32 mx-auto md:mt-0 my-5'>
                    <div className='flex flex-col w-full font-light font-poppins'>
                        <div className='flex flex-col'>
                            <label className='text-black font-poppins text-lg md:text-2xl'>Nimi</label>
                            <input className='text-black font-mono text-lg md:text-lg border-solid border-2 border-black' type='text'></input>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='text-black font-poppins text-lg md:text-2xl'>Sähköposti</label>
                            <input className='text-black font-mono text-lg md:text-lg border-solid border-2 border-black' type='text'></input>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='text-black font-poppins text-lg md:text-2xl'>Viesti</label>
                            <textarea className='text-black font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>
                        </div>
                        <button className='text-black font-poppins text-2xl text-center md:text-left mt-6'>Lähetä</button>
                    </div>
                </div>
            </div>
        </div>
    );
}