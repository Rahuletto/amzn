import Image from 'next/image'
import Head from 'next/head'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiFillCaretDown } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { relative } from 'path'

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/amazon-fonts@1.0.1/fonts/stylesheet.css" />
        <title>Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in</title>
        <meta name="keywords" content="Amazon.in, Amazon, Online Shopping, online shopping india, india shopping online, amazon india, amazn, buy online, buy mobiles online, buy books online, buy movie dvd's online, kindle, kindle fire hd, kindle e-readers, ebooks, computers, laptop, toys, trimmers, watches, fashion jewellery, home, kitchen, small appliances, beauty, Sports, Fitness &amp; Outdoors" />
        <link rel="canonical" href="https://www.amazon.in/" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="fb:app_id" content="164734381262" />
        <meta property="og:image" content="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg" />
        <meta property="og:description" content="Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping &amp; Cash on Delivery Available." />

        <meta name="description" content="Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping &amp; Cash on Delivery Available." />

        <link rel="icon" href="https://www.amazon.in/favicon.ico" sizes="any" />

      </Head>

      {/* Header of the site (aka. The top bar) */}
      <header id="nav-belt" className={`flex fixed top-0 left-0 w-full h-16 f-14 items-center justify-between`}>
        <div id="nav-left" className="flex items-center ml-[12px]">
          <div id="nav-logo" className='pr-[8px] pl-[6px] pt-[1px]'>
            <a href="#" id="nav-logo-sprites" className="nav-logo-link nav-progressive-attribute" aria-label="Amazon.in">
              <span className="nav-sprite nav-logo-base"></span>
              <span id="logo-ext" className="nav-sprite nav-logo-ext nav-progressive-content"></span>
              <span className="nav-logo-locale text-white">.in</span>
            </a>
          </div>
          <a id="nav-global-location-popover-link" className="items-center pl-[9px] pr-[9px] flex nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute" >
            <HiOutlineLocationMarker />
            <div id="glow-ingress-block" className='flex flex-col'>
              <span className="nav-line-1 nav-progressive-content text-xs" id="glow-ingress-line1">
                Hello
              </span>
              <span className="text-sm font-bold nav-line-2 nav-progressive-content" id="glow-ingress-line2">
                Select your address
              </span>
            </div>
          </a>
        </div>

        <div id="nav-middle" className="flex m-[12px]">
          <div id="nav-search" className="flex nav-fixed" style={{ left: "58px", right: "392px" }}>
            <form id="nav-search-bar-form" accept-charset="utf-8" className="nav-searchbar nav-progressive-attribute" method="GET" name="site-search" role="search">

              <div className="nav-left">
                <div id="nav-search-dropdown-card">

                  <div className="nav-search-scope nav-sprite">
                    <div className="nav-search-facade" data-value="search-alias=aps">
                      <span id="nav-search-label-id" className="nav-search-label nav-progressive-content" style={{ width: 'auto' }}>All <AiFillCaretDown /></span>
                    </div>
                    <label id="searchDropdownDescription" htmlFor="searchDropdownBox" className="nav-progressive-attribute" style={{ display: 'none' }}>Select the department you want to search in</label>
                    <select aria-describedby="searchDropdownDescription" className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown" data-nav-digest="QLzJjdG9IZh17Us3VBQ9o6862kI=" data-nav-selected="0" id="searchDropdownBox" name="url" style={{ display: "block", top: "2.5px" }} title="Search in">
                      <option selected value="search-alias=aps">All Categories</option>
                      <option value="search-alias=alexa-skills">Alexa Skills</option>
                      <option value="search-alias=amazon-devices">Amazon Devices</option>
                      <option value="search-alias=fashion">Amazon Fashion</option>
                      <option value="search-alias=nowstore">Amazon Fresh</option>
                      <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
                      <option value="search-alias=appliances">Appliances</option>
                      <option value="search-alias=mobile-apps">Apps &amp; Games</option>
                      <option value="search-alias=audible">Audible Audiobooks</option>
                      <option value="search-alias=baby">Baby</option>
                      <option value="search-alias=beauty">Beauty</option>
                      <option value="search-alias=stripbooks">Books</option>
                      <option value="search-alias=automotive">Car &amp; Motorbike</option>
                      <option value="search-alias=apparel">Clothing &amp; Accessories</option>
                      <option value="search-alias=collectibles">Collectibles</option>
                      <option value="search-alias=computers">Computers &amp; Accessories</option>
                      <option value="search-alias=electronics">Electronics</option>
                      <option value="search-alias=furniture">Furniture</option>
                      <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
                      <option value="search-alias=gift-cards">Gift Cards</option>
                      <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
                      <option value="search-alias=hpc">Health &amp; Personal Care</option>
                      <option value="search-alias=kitchen">Home &amp; Kitchen</option>
                      <option value="search-alias=industrial">Industrial &amp; Scientific</option>
                      <option value="search-alias=jewelry">Jewellery</option>
                      <option value="search-alias=digital-text">Kindle Store</option>
                      <option value="search-alias=luggage">Luggage &amp; Bags</option>
                      <option value="search-alias=luxury-beauty">Luxury Beauty</option>
                      <option value="search-alias=dvd">Movies &amp; TV Shows</option>
                      <option value="search-alias=popular">Music</option>
                      <option value="search-alias=mi">Musical Instruments</option>
                      <option value="search-alias=office-products">Office Products</option>
                      <option value="search-alias=pets">Pet Supplies</option>
                      <option value="search-alias=instant-video">Prime Video</option>
                      <option value="search-alias=shoes">Shoes &amp; Handbags</option>
                      <option value="search-alias=software">Software</option>
                      <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
                      <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
                      <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
                      <option value="search-alias=toys">Toys &amp; Games</option>
                      <option value="search-alias=under-ten-dollars">Under ₹500</option>
                      <option value="search-alias=videogames">Video Games</option>
                      <option value="search-alias=watches">Watches</option>
                    </select>
                  </div>

                </div>
              </div>
              <div className="nav-fill">
                <div className="nav-search-field ">
                  <label htmlFor="twotabsearchtextbox" style={{ display: 'none' }}>Search Amazon.in</label>
                  <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autoComplete="off" placeholder="Search Amazon.in" className="nav-input nav-progressive-attribute" dir="auto" aria-label="Search Amazon.in" spellCheck="false" />
                </div>
                <div id="nav-iss-attach"></div>
              </div>
              <div className="nav-right">
                <div className="nav-search-submit nav-sprite">
                  <span id="nav-search-submit-text" className="nav-search-submit-text nav-sprite nav-progressive-attribute" aria-label="Go">
                    <input id="nav-search-submit-button" type="submit" className="nav-input nav-progressive-attribute" value=" " />
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div id="nav-right">
          <div id="nav-tools" className="layoutToolbarPadding items-center">
            <a href="#" id="icp-nav-flyout" className="nav-a nav-a-2 icp-link-style-2" aria-label="Choose a language for shopping.">
              <span className="nav-line-2 flex items-center font-bold">
                <span className="text-sm font-bold icp-nav-flag icp-nav-flag-in icp-nav-flag-lop"></span>
                <div>EN</div>
                <AiFillCaretDown className="arrow-down" />
              </span>
            </a>


            <a href="#" className="nav-a nav-a-2   nav-progressive-attribute" data-nav-ref="nav_ya_signin" data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-accountList" data-csa-c-type="link" data-csa-c-slot-id="nav-link-accountList" data-csa-c-content-id="nav_ya_signin" data-csa-c-id="xxmxwi-ewozi8-60iw5p-8f4fb9">
              <div className="nav-line-1-container"><span id="nav-link-accountList-nav-line-1" className="text-xs nav-line-1 nav-progressive-content">Hello, sign in</span></div>
              <span className="text-sm font-bold nav-line-2 ">Account &amp; Lists<span className="nav-icon nav-arrow"></span>
              </span>
            </a>


            <a href="#" className="nav-a nav-a-2   nav-progressive-attribute" id="nav-orders" >
              <span className="nav-line-1 text-xs">Returns</span>
              <span className="nav-line-2 text-sm font-bold">&amp; Orders<span className="nav-icon nav-arrow"></span></span>
            </a>



            <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart" style={{ flexDirection: 'row' }} aria-label="0 items in cart" className="flex-row nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
              <div id="nav-cart-count-container">
                <span id="nav-cart-count" aria-hidden="true" className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content">0</span>
                <span className="nav-cart-icon nav-sprite"></span>
              </div>
              <div id="nav-cart-text-container" className=" nav-progressive-attribute">
                <span aria-hidden="true" className="nav-line-1">

                </span>
                <span aria-hidden="true" className="nav-line-2 font-bold">
                  Cart
                  <span className="nav-icon nav-arrow"></span>
                </span>
              </div>
            </a>

          </div>
        </div>

      </header>

      {/* Ribbon header of the site (aka. The sub-header kinda thing) */}
      <div className='ribbon'>
        <a href="#" className="nav-a font-bold" ><GiHamburgerMenu /> All</a>
        <a href="#" className="nav-a">Amazon miniTV</a>
        <a href="#" className="nav-a">Sell</a>
        <a href="#" className="nav-a">Best Sellers</a>
        <a href="#" className="nav-a">Mobiles</a>
        <a href="#" className="nav-a">Today{"'s"} Deal</a>
        <a href="#" className="nav-a">New Releases</a>

      </div>

      {/* The background image of the lander page */}
      <div className="img-cont" >
        <Image width={1114} height={446} priority={true} alt="Mobile bruh" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/Jupiter23/OPPO/Uber/V1/D98467701_PC_Hero_3000x1200._CB577020453_.jpg"></Image>
      </div>

      {/* Grid of the cards */}
      <div id="grid">
        {/* Cards in the grid*/}
        <div id="card">
          <h1>Up to 75% off | Headphones</h1>
          <div id="card-grid">
            <div>
              <Image alt="boat" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg" />
              <p>Up to 75% off | Boat</p>
            </div>

            <div>
              <Image alt="boult" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg" />
              <p>Up to 75% off | Boult</p>
            </div>

            <div>
              <Image alt="noise" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg" />
              <p>Up to 75% off | Noise</p>
            </div>

            <div>
              <Image alt="zebronics" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg" />
              <p>Up to 75% off | Zebronics</p>
            </div>

          </div>
          <a className="see-more truncate-1line" href="#">See all offers</a>
        </div>

        <div id="card">
          <h1>Great Indian Festival | Starts 8th Oct</h1>
          <Image style={{height: "285px", objectFit: "cover"}} width={344} height={300} src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/J23_PC_CC_V2_1x._SY304_CB577183061_.jpg" alt="Great indian sale" />
          <a className="see-more truncate-1line" href="#">See all offers</a>
        </div>

        <div id="card">
        <h1>Get sale ready</h1>
        <div id="card-grid">
          <div>
            <Image alt="cricket" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_CFO_1X._SY116_CB576944545_.jpg" />
            <p>Up to 60% off on everything cricket</p>
          </div>

          <div>
            <Image alt="new" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/T_186x116._SY116_CB577083382_.jpg" />
            <p>Up to 50% off on 300+ New arrivals</p>
          </div>

          <div>
            <Image alt="shop deals" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_KSD_1X._SY116_CB577460621_.jpg" />
            <p>Shop festival prices, before the sale</p>
          </div>

          <div>
            <Image alt="sample" width={150} height={116} src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Sample_Mania_1X._SY116_CB576944545_.jpg" />
            <p>Try before you buy sample starting ₹1</p>
          </div>

        </div>
        <a className="see-more truncate-1line" href="#">See all offers</a>
      </div>

      </div>


    </main>
  )
}
