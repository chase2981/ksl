import React, { PureComponent } from 'react';

const bgImageStyles = {
  width: "100%",
  height: "40vh",
  transition: "all 0.5",
  boxShadow: "0px 4px 9px -1px rgba(0,0,0,0.75)",
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: "url('/images/o-nas/image1.jpg')",
  backgroundPositionY: "50%"
};

export default class AboutUs extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid hidden-xs">
          <div className="row">
            <div className="bg-image" style={bgImageStyles}></div>
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-12 pb-2 mt-4 mb-2 border-bottom">
              <h1>O nás</h1>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
                <p>
                    <b>KOŠICKÁ STREETBALLOVÁ LIGA</b> je dobrovoľné občianske združenie, ktoré vzniklo 16. júna 2002. Hlavnou náplňou združenia je organizácia streetballových turnajov a streetballových líg v Košiciach a v Košickom kraji. Od roku 1996 sa nám podarilo úspešne zorganizovať už 18. ročníkov tohto uličného športu. V roku 2001 sa nám vďaka podpore spoločnosti GLOBTEL, dnes ORANGE podarilo zorganizovať aj niekoľko otvorených turnajov pre mládež a deti základných škôl. Streetballová liga sa hrá hlavne v lete a každoročne ju hrá viac ako 70 hráčov.
                </p>
                <p>V rámci nej súbežne prebieha STREETBALLOVÝ POHÁR, ktorý sa hrá systémom PLAY OFF. FINAL FOUR je finálový záverečný turnaj. Pri dobrej hudbe, skvelej atmosfére a voňavom občerstvení sa rozhoduje o víťazovi ligy a najlepších hráčoch ligy.</p>
                <p>Finále je každoročne 1. septembra na Deň ústavy SR, minulé roky sa často hralo na ihrisku na ulici Milosrdenstva vďaka podpore Mestkej časti Juh.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <h2>História</h2>
            </div>
            
            <div className="col-sm-6 col-md-4">
                <p>V rokoch <b>2003-2005</b> sme zorganizovali aj veľký jednodňový turnaj TESCO STREETBALL v spolupráci s Hypermarketom Tesco Košice. Pre žiakov stredných škôl v rokoch 2005 a 2006 aj víkendový turnaj CASSOVIA CHILDREN CUP.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2005</b> oslávila KSL 10 rokov svojej existencie a vďaka podpore spoločnosti ORANGE sme finále ligy mohli veľkolepo osláviť aj pozvaním celbrít ako sú speváčka TINA a ČISTYCHOV.</p>
            </div>
            
            <div className="visible-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2006</b> vďaka Novej koncepcii rozvoja športu v Košiciach sa nám podarilo získať dotácie od mesta Košice.</p>
            </div>
            
            
            <div className="hidden-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2007</b> sa liga uskutočnila vďaka spoločnosti RWE Group a jej podpore v rámci 2% z daní.</p>
            </div>
            
            <div className="visible-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2008</b> sa liga organizovala opäť vďaka podpore mesta Košice a dotácie vrámci koncepcie rozvoja športu v Košiciach z Fondu športových aktivít – Podujatia pre široká verejnosť. Finále sa hralo prvý krát hrali na ihrisku pri SPŠH na Alejovej ulici.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2009</b> sa liga uskotočnila po prvý krát len z vlastných finančných zdrojov, aj to napriek sľubom niektorých “podporovateľov” ligy. Väčšina zápasov 14.  ročníka sa odohrala na multifunkčnom ihrisku na Pajorovej ulici aj vďaka tomu, že nezmyselný poplatok za rezerváciu verejného ihriska mesto Košice ešte nezaviedlo.</p>
            </div>
            
            <div className="visible-sm clearfix"></div>
            <div className="hidden-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2010</b> oslávila KSL 15 rokov svojej existencie. Podujatie sa podarilo zorganizovať pod záštitou DMS Košice a MČ Košice Nad jazerom. Vďaka MČ Košice Nad jazerom a p. starostke MVDr. Anne Jenčovej sa celý ročník podarilo odohrať na multifunkčnom ihrisku na Amurskej ulici.  Mecenášom celého podujatia bol Miloš Petráš (GESKER).</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2011</b> sa nám podarilo získať ďalší grant z Magistrátu mesta Košice na podporu voľnočasových aktivít.</p>
            </div>
            
            <div className="visible-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>Roky <b>2012</b> a <b>2013</b> sa uskutočnili vďaka sponzorskej podpore spoločností ENERGOCOM a MaCWEB. Obidva ročníky boli najsilnejšími ročníkmi ligy, hralo ich až 10 družstiev a vyše 90 hráčov.</p>
            </div>
                
                
            <div className="hidden-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2014</b> sme získali finančnú podporu v rámci programu Vráťme deťom šport do Košíc. Ligu hralo 8 družstiev. OZ Šport do Košíc zabezpečilo takisto pitný režim počas celej ligy a ceny pre najlepších jednotlivcov a družstvá.</p>
            </div>
            
            <div className="visible-sm clearfix"></div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2015</b> oslávila Košická streetballová liga 20 rokov svojej existencie. Pribudli noví partneri: VSE RWE Group, Letisko Košice, Labaš s.r.o., kúpalisko Ryba Anička. Košická streetballová liga sa stala aj súčasťou projektu Európske mesto športu 2016  v rámci koncepcie rozvoja športu v meste Košice.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
                <p>V roku <b>2016</b> odštartoval 21.ročník Košickej streetballovej ligy.</p>
            </div>
          </div>
      </div>

      </React.Fragment>
    );
  }
}