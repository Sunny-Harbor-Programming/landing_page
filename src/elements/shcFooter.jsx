export default function SHCFooter() {
  return (
    <div id="footerWrapper" className="bg-main pt-10 border-white border-t-2">
      <div className="justify-center lg:visible hidden bg-main md:block">
        <div className="grid grid-cols-1 px-4 text-white md:grid-cols-3 max-w-7x1 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="w-2/3">
                <h1 className="mb-4 text-lg font-medium text-footerTitle">
                  Sunny Harbor Consulting
                </h1>
                <p className="italic font-light text-footerElements">
                  Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys,
                  joka erikoistuu innovatiivisiin web- ja mobiilisovelluksiin.
                  Avoimen viestinnän ja tiiviin yhteistyön avulla tarjoamme
                  räätälöityjä ohjelmistoratkaisuja, jotka tukevat asiakkaidemme
                  menestystä.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="mb-4 text-lg font-medium text-footerTitle">
                Sosiaaliset mediat
              </h1>
              <div className="flex flex-col italic font-light text-footerElements">
                <a className="mb-2" href="www.instagram.com">
                  Instagram
                </a>
                <a className="mb-2" href="www.linkedin.com">
                  Linkedin
                </a>
                <a className="mb-2" href="www.facebook.com">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h1 className="mb-4 text-lg font-medium text-footerTitle">
                Yhteystiedot
              </h1>
              <div className="italic font-light text-footerElements">
                <p className="mb-2">Aurinkoinenkatu 4B, 00990 HELSINKI</p>
                <p className="mb-2">sunnyharborconsulting@gmail.com</p>
                <p className="mb-2">+358 000000000</p>
                <p className="mb-2">Y-Tunnus: 0000000-0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-normal text-footerElements text-sm text-center py-6">
        © 2023 Sunny Harbor Consulting
      </h2>
    </div>
  );
}
