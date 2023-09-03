import { useRef } from "react";

//import '../style/pages/about.css';

export default function AboutPage(language = "fi") {
  const aboutUsWrapper = useRef(null);

  return (
    <div
      className="bg-main relative z-[10]"
      ref={aboutUsWrapper}
      id="aboutUsWrapper"
    >
      <div>
        <a
          target="_blank"
          className="bg-white flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[38vh] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/sisu-eriksson-b69475231/"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins md:text-7xl lg:text-7xl">
              Sisu Eriksson
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full">
              Frontend kehitäjä ja markkinointi
            </h2>
            <p className="text-black font-poppins font-light italic text-lg md:text-5xl lg:text-4xl md:mt-5 lg:w-full w-[64vw]">
              "Hyvin suunniteltu on jo puoliksi tehty"
            </p>
            <p className="hidden text-black font-poppins font-extralight lg:text-4xl lg:mt-10 lg:block">
              Sisu on monitaitoinen osaaja, joka toimii yrityksessä sekä
              frontend developerina että markkinoinnin ja toimitusjohtajuuden
              tehtävissä. Hänellä on vankka tekninen osaaminen
              frontend-kehityksessä ja laaja kokemus markkinoinnista. Sisu
              pyrkii luomaan vaikuttavia digitaalisia kokemuksia ja edistämään
              yrityksen menestystä monipuolisesti.
            </p>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4 lg:w-full md:w-3/7"
              src="./src/assets/founders/transparent_sisu.webp"
            ></img>
          </div>
        </a>
        <a
          target="_blank"
          className="bg-black m-0 p-0 flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[38vh] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/leon-g-732b31204/"
        >
          <div className="w-full h-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-white font-poppins md:text-7xl lg:text-7xl">
              Leon Gustafsson
            </h1>
            <h2 className="w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full">
              Frontend kehittäjä ja suunnittelija
            </h2>
            <p className="text-white font-poppins font-light italic text-lg md:text-5xl lg:text-4xl md:mt-5 lg:w-full w-[60vw]">
              "Päämääränä on käyttäjälle huomattava helpotus arjessa."
            </p>
            <p className="hidden text-white font-poppins font-extralight lg:text-4xl lg:mt-10 lg:block">
              Leon on kokenut frontend-kehittäjä, joka yhdessä suunnittelijan
              kanssa luo vaikuttavia käyttöliittymiä. Hänen taitonsa
              teknologiassa ja kykynsä yhdistää käytettävyys ja visuaalinen
              houkuttelevuus tekevät hänestä arvokkaan tiimin jäsenen. Leonin
              intohimo käyttäjärajapintojen kehittämiseen heijastuu hänen
              työssään, ja hän pyrkii jatkuvasti tuomaan innovatiivisia
              ratkaisuja projekteihin.
            </p>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4 lg:w-full md:w-3/7"
              src="./src/assets/founders/transparent_leon.webp"
            ></img>
          </div>
        </a>
        <a
          target="_blank"
          className="bg-white flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[50h] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/victor-ocampo-a609b3250/"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-black font-poppins md:text-7xl lg:text-7xl">
              Victor Ocampo
            </h1>
            <h2 className="w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full">
              Full stack kehittäjä
            </h2>
            <p className="text-black font-poppins font-light italic text-lg md:text-5xl lg:text-4xl md:mt-5 lg:w-full w-[60vw]">
              "Yhdistämällä hyvän suhteen asiakkaisiin ja luotettavan
              teknologian, kaikki on mahdollista."
            </p>
            <p className="hidden text-black font-poppins font-extralight lg:text-4xl lg:mt-10 lg:block">
              Victor on monipuolinen fullstack-kehittäjä, joka loistaa
              erityisesti backend-ohjelmoinnissa. Hänen hämmästyttävä
              koodaustaitonsa ja vahva tekninen osaamisensa rikastuttavat
              tiimiämme. Vaikka Victor keskittyy pääosin backend-kehitykseen,
              hänellä on tarvittavat taidot myös frontendin parissa
              työskentelyyn tarvittaessa. Victor panostaa huolellisesti
              projektien laatuun ja turvallisuuteen, ja hänellä on vahva
              sitoutuminen asiakkaidemme tarpeiden täyttämiseen.
            </p>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4 lg:w-full md:w-3/7"
              src="./src/assets/founders/transparent_victor2.png"
            ></img>
          </div>
        </a>
        <a
          target="_blank"
          className="bg-black flex justify-between flex-col lg:flex-row lg:h-[90vh] md:min-h-[67.5vh] min-h-[39vh] lg:justify-between grid-cols-1 md:grid-cols-2"
          href="https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/"
        >
          <div className="w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10">
            <h1 className="text-4xl italic font-extrabold text-white font-poppins md:text-7xl lg:text-7xl">
              Marc Smeds
            </h1>
            <h2 className="w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full">
              Full stack kehittäjä
            </h2>
            <p className="text-white font-poppins font-light italic text-lg md:text-5xl lg:text-4xl md:mt-5 lg:w-full w-[60vw]">
              "Hetki on kaikki mitä tarvitsemme."
            </p>
            <p className="hidden text-white font-poppins font-extralight lg:text-4xl lg:mt-10 lg:block">
              Marc on taitava fullstack-kehittäjä, joka on erikoistunut
              monimutkaisten kokonaisuuksien hajottamiseen ja
              yksinkertaistamiseen. Hänen kykynsä luoda selkeitä ja tehokkaita
              ratkaisuja tekee hänestä arvokkaan tiimipelaajan. Marc on innokas
              tekemään monimutkaisetkin projektit saumattomiksi ja helposti
              hallittaviksi osiksi.
            </p>
          </div>
          <div className="flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 md:mt-[-150px] mt-[-110px]">
            <img
              alt="A handsome man"
              className="object-contain w-1/2 aspect-1:4 lg:w-full md:w-3/7"
              src="./src/assets/team/transparent_alex.webp"
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
}

/*

        <br></br><br></br>Olemme jatkuvasti ajan hermoilla, oppien uutta teknologiaa ja kehittyen, jotta voimme tarjota parasta palvelua asiakkaillemme.

        Avoimen viestinnän ja tiiviin yhteistyön periaatteemme mahdollistavat syvällisen ymmärryksen asiakkaidemme tarpeista, jotta voimme räätälöidä juuri heille sopivia ohjelmistoratkaisuja. Toteutamme projektit sovitussa aikataulussa ja budjetissa.

        <br></br><br></br>Olemme ylpeitä nuoresta, taitavasta tiimistämme ja kyvystämme luoda ainutlaatuisia ohjelmistoratkaisuja. Missiomme on auttaa asiakkaitamme menestymään modernin teknologian avulla.
               
                            <a target="_blank" href='https://www.linkedin.com/in/leon-g-732b31204/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/leon.png'></img>
                                    <h2>Leon</h2>
                                    <p>Frontend kehittäjä ja suunnittelija</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/victor-ocampo-a609b3250/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/victor.jpeg'></img>
                                    <h2>Victor</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/team/alex.png'></img>
                                    <h2>Marc</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
*/
