export default function ContactPage() {
    return (
        <div className='bg-black lg:h-[75vh] lg:pb-0 pb-10' id="contactWrapper">
            <div id="main" className='lg:h-full'>
            <h1 className='text-white font-poppins md:text-6xl text-4xl lg:pt-[10vh] md:pt-10 lg:px-24 pt-7 md:px-14 px-4 font-semibold italic'>Ota yhteyttä</h1>
                <div className='flex flex-col grid-cols-1 mt-5 md:mt-5 lg:mt-10 lg:flex-row lg:grid-cols-2' id='firstSection'>
                    <div className="flex items-start justify-center w-full px-4 pb-10 mx-auto lg:w-1/2 lg:pl-24 lg:px-0 md:px-14 lg:mx-0 lg:pb-0">
                        <p className='w-full text-lg font-light text-white font-poppins md:text-3xl lg:text-4xl'>
                        Ota yhteyttä meihin, kysyäksesi tarjousta. Vastaamme sinulle mahdollisimman pian!
                        </p>
                    </div>
                    <div className='flex justify-center mx-5 md:w-3/5 lg:w-1/2 lg:px-32'>
                        <div className='flex flex-col w-full font-light font-poppins'>
                            <div className='flex flex-col'>
                                <label className='text-lg text-white font-poppins md:text-2xl'>Nimi</label>
                                <input className='p-2 font-mono text-lg text-white bg-transparent border-2 border-white border-solid md:text-lg' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-lg text-white font-poppins md:text-2xl'>Sähköposti</label>
                                <input className='p-2 font-mono text-lg text-white bg-transparent border-2 border-white border-solid md:text-lg' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-lg text-white font-poppins md:text-2xl'>Viesti</label>
                                <textarea className='text-white font-mono p-2 text-xl border-solid border-2 border-white bg-transparent min-h-[100px] max-h-56' type='text'></textarea>
                            </div>
                            <button className='mt-6 text-2xl text-center text-white font-poppins md:text-left'>Lähetä</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}