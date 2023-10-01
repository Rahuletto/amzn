import { useState } from "react";

// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillCaretDown } from "react-icons/ai";

export const Header = () => {
    const [search, setSearch] = useState('')
  return (
    <header
      id="nav-belt"
      className={`flex fixed top-0 left-0 w-full h-16 f-14 items-center justify-between`}
    >
      <div id="nav-left" className="flex items-center ml-[12px]">
        <div id="nav-logo" className="pr-[8px] pl-[6px] pt-[1px]">
          <a
            href="#"
            id="nav-logo-sprites"
            className="nav-logo-link nav-progressive-attribute"
            aria-label="Amazon.in"
          >
            <span className="nav-sprite nav-logo-base"></span>
            <span
              id="logo-ext"
              className="nav-sprite nav-logo-ext nav-progressive-content"
            ></span>
            <span className="nav-logo-locale text-white">.in</span>
          </a>
        </div>
        <a
          id="nav-global-location-popover-link"
          className="items-center pl-[9px] pr-[9px] flex nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute"
        >
          <HiOutlineLocationMarker />
          <div id="glow-ingress-block" className="flex flex-col">
            <span
              className="nav-line-1 nav-progressive-content text-xs"
              id="glow-ingress-line1"
            >
              Hello
            </span>
            <span
              className="text-sm font-bold nav-line-2 nav-progressive-content"
              id="glow-ingress-line2"
            >
              Select your address
            </span>
          </div>
        </a>
      </div>

      <div id="nav-middle" className="flex m-[12px]">
        <div
          id="nav-search"
          className="flex nav-fixed"
          style={{ left: "58px", right: "392px" }}
        >
          <form
            id="nav-search-bar-form"
            acceptCharset="utf-8"
            className="nav-searchbar nav-progressive-attribute"
            method="GET"
            name="site-search"
            role="search"
          >
            <div className="nav-left">
              <div id="nav-search-dropdown-card">
                <div className="nav-search-scope nav-sprite">
                  <div
                    className="nav-search-facade"
                    data-value="search-alias=aps"
                  >
                    <span
                      id="nav-search-label-id"
                      className="nav-search-label nav-progressive-content"
                      style={{ width: "auto" }}
                    >
                      All <AiFillCaretDown />
                    </span>
                  </div>
                  <label
                    id="searchDropdownDescription"
                    htmlFor="searchDropdownBox"
                    className="nav-progressive-attribute"
                    style={{ display: "none" }}
                  >
                    Select the department you want to search in
                  </label>
                  <select
                    aria-describedby="searchDropdownDescription"
                    className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
                    data-nav-digest="QLzJjdG9IZh17Us3VBQ9o6862kI="
                    data-nav-selected="0"
                    id="searchDropdownBox"
                    name="url"
                    style={{ display: "block", top: "2.5px" }}
                    title="Search in"
                    defaultValue={'slcted'}
                  >
                    <option value="slcted">
                      All Categories
                    </option>
                    <option value="search-alias=alexa-skills">
                      Alexa Skills
                    </option>
                    <option value="search-alias=amazon-devices">
                      Amazon Devices
                    </option>
                    <option value="search-alias=fashion">Amazon Fashion</option>
                    <option value="search-alias=nowstore">Amazon Fresh</option>
                    <option value="search-alias=amazon-pharmacy">
                      Amazon Pharmacy
                    </option>
                    <option value="search-alias=appliances">Appliances</option>
                    <option value="search-alias=mobile-apps">
                      Apps &amp; Games
                    </option>
                    <option value="search-alias=audible">
                      Audible Audiobooks
                    </option>
                    <option value="search-alias=baby">Baby</option>
                    <option value="search-alias=beauty">Beauty</option>
                    <option value="search-alias=stripbooks">Books</option>
                    <option value="search-alias=automotive">
                      Car &amp; Motorbike
                    </option>
                    <option value="search-alias=apparel">
                      Clothing &amp; Accessories
                    </option>
                    <option value="search-alias=collectibles">
                      Collectibles
                    </option>
                    <option value="search-alias=computers">
                      Computers &amp; Accessories
                    </option>
                    <option value="search-alias=electronics">
                      Electronics
                    </option>
                    <option value="search-alias=furniture">Furniture</option>
                    <option value="search-alias=lawngarden">
                      Garden &amp; Outdoors
                    </option>
                    <option value="search-alias=gift-cards">Gift Cards</option>
                    <option value="search-alias=grocery">
                      Grocery &amp; Gourmet Foods
                    </option>
                    <option value="search-alias=hpc">
                      Health &amp; Personal Care
                    </option>
                    <option value="search-alias=kitchen">
                      Home &amp; Kitchen
                    </option>
                    <option value="search-alias=industrial">
                      Industrial &amp; Scientific
                    </option>
                    <option value="search-alias=jewelry">Jewellery</option>
                    <option value="search-alias=digital-text">
                      Kindle Store
                    </option>
                    <option value="search-alias=luggage">
                      Luggage &amp; Bags
                    </option>
                    <option value="search-alias=luxury-beauty">
                      Luxury Beauty
                    </option>
                    <option value="search-alias=dvd">
                      Movies &amp; TV Shows
                    </option>
                    <option value="search-alias=popular">Music</option>
                    <option value="search-alias=mi">Musical Instruments</option>
                    <option value="search-alias=office-products">
                      Office Products
                    </option>
                    <option value="search-alias=pets">Pet Supplies</option>
                    <option value="search-alias=instant-video">
                      Prime Video
                    </option>
                    <option value="search-alias=shoes">
                      Shoes &amp; Handbags
                    </option>
                    <option value="search-alias=software">Software</option>
                    <option value="search-alias=sporting">
                      Sports, Fitness &amp; Outdoors
                    </option>
                    <option value="search-alias=specialty-aps-sns">
                      Subscribe &amp; Save
                    </option>
                    <option value="search-alias=home-improvement">
                      Tools &amp; Home Improvement
                    </option>
                    <option value="search-alias=toys">Toys &amp; Games</option>
                    <option value="search-alias=under-ten-dollars">
                      Under ₹500
                    </option>
                    <option value="search-alias=videogames">Video Games</option>
                    <option value="search-alias=watches">Watches</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="nav-fill">
              <div className="nav-search-field ">
                <label
                  htmlFor="twotabsearchtextbox"
                  style={{ display: "none" }}
                >
                  Search Amazon.in
                </label>
                <input
                  type="text"
                  id="twotabsearchtextbox"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  name="field-keywords"
                  autoComplete="off"
                  placeholder="Search Amazon.in"
                  className="nav-input nav-progressive-attribute"
                  dir="auto"
                  aria-label="Search Amazon.in"
                  spellCheck="false"
                />
              </div>
              <div id="nav-iss-attach"></div>
            </div>
            <div className="nav-right">
              <div className="nav-search-submit nav-sprite">
                <span
                  id="nav-search-submit-text"
                  className="nav-search-submit-text nav-sprite nav-progressive-attribute"
                  aria-label="Go"
                >
                  <input
                    id="nav-search-submit-button"
                    type="submit"
                    className="nav-input nav-progressive-attribute"
                    value=" "
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div id="nav-right">
        <div id="nav-tools" className="layoutToolbarPadding items-center">
          <a
            href="#"
            id="icp-nav-flyout"
            className="nav-a nav-a-2 icp-link-style-2"
            aria-label="Choose a language for shopping."
          >
            <span className="nav-line-2 flex items-center font-bold">
              <span className="text-sm font-bold icp-nav-flag icp-nav-flag-in icp-nav-flag-lop"></span>
              <div>EN</div>
              <AiFillCaretDown className="arrow-down" />
            </span>
          </a>

          <a
            href="#"
            className="nav-a nav-a-2   nav-progressive-attribute"
            data-nav-ref="nav_ya_signin"
            data-nav-role="signin"
            data-ux-jq-mouseenter="true"
            id="nav-link-accountList"
            data-csa-c-type="link"
            data-csa-c-slot-id="nav-link-accountList"
            data-csa-c-content-id="nav_ya_signin"
            data-csa-c-id="xxmxwi-ewozi8-60iw5p-8f4fb9"
          >
            <div className="nav-line-1-container">
              <span
                id="nav-link-accountList-nav-line-1"
                className="text-xs nav-line-1 nav-progressive-content"
              >
                Hello, sign in
              </span>
            </div>
            <span className="text-sm font-bold nav-line-2 ">
              Account &amp; Lists<span className="nav-icon nav-arrow"></span>
            </span>
          </a>

          <a
            href="#"
            className="nav-a nav-a-2   nav-progressive-attribute"
            id="nav-orders"
          >
            <span className="nav-line-1 text-xs">Returns</span>
            <span className="nav-line-2 text-sm font-bold">
              &amp; Orders<span className="nav-icon nav-arrow"></span>
            </span>
          </a>

          <a
            href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart"
            style={{ flexDirection: "row" }}
            aria-label="0 items in cart"
            className="flex-row nav-a nav-a-2 nav-progressive-attribute"
            id="nav-cart"
          >
            <div id="nav-cart-count-container">
              <span
                id="nav-cart-count"
                aria-hidden="true"
                className="nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content"
              >
                0
              </span>
              <span className="nav-cart-icon nav-sprite"></span>
            </div>
            <div
              id="nav-cart-text-container"
              className=" nav-progressive-attribute"
            >
              <span aria-hidden="true" className="nav-line-1"></span>
              <span aria-hidden="true" className="nav-line-2 font-bold">
                Cart
                <span className="nav-icon nav-arrow"></span>
              </span>
            </div>
          </a>
        </div>
      </div>
      
    </header>
  );
};
