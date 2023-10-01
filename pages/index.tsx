import Image from "next/image";
import Head from "next/head";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Card = dynamic(() => import("@/components/Card").then((a) => a.Card), {
  ssr: false,
  loading: () => <div style={{ height: "448px" }} id="card"></div>,
});

const Header = dynamic(
  () => import("@/components/Header").then((a) => a.Header),
  { ssr: true }
);
const Ribbon = dynamic(() =>
  import("@/components/Ribbon").then((a) => a.Ribbon)
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((a) => a.Footer)
);

const imgs = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/AF-PC_Unrec-3000._CB577063325_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/KSD/Deals-PC-3000-Unrec._CB577064215_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_soft-toys_2x._CB577439484_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/ksd/oldbank/DesktopHero_3000x1200._CB577020869_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/Jupiter23/OPPO/Uber/V1/D98467701_PC_Hero_3000x1200._CB577020453_.jpg",
];
const cardCollection = [
  <Card
    key="1"
    title="Up to 75% off | Headphones"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        alt: "Boat",
        text: "Up to 75% off | Boat",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        alt: "Boult",
        text: "Up to 75% off | Boult",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        alt: "Noise",
        text: "Up to 75% off | Noise",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
        alt: "Zebronics",
        text: "Up to 75% off | Zebronics",
      },
    ]}
  />,
  <Card
  key="2"
    title="Great Indian Festival | Starts 8th Oct"
    image={{
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/J23_PC_CC_V2_1x._SY304_CB577183061_.jpg",
      alt: "Great Indian sale",
    }}
  />,
  <Card
  key="3"
    title="Get sale ready"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_CFO_1X._SY116_CB576944545_.jpg",
        alt: "Cricket",
        text: "Up to 60% off on everything cricket",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/T_186x116._SY116_CB577083382_.jpg",
        alt: "New arrivals",
        text: "Up to 50% off on 300+ New arrivals",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_KSD_1X._SY116_CB577460621_.jpg",
        alt: "Deals like never before",
        text: "Shop festival prices, before the sale",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Sample_Mania_1X._SY116_CB576944545_.jpg",
        alt: "Samples",
        text: "Try before you buy sample starting ₹1",
      },
    ]}
  />,
  <Card
  key="4"
    title="Bluetooth Calling Smartwatch starts at ₹1,999"
    image={{
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
      alt: "Smart watch",
    }}
  />,
  <Card
  key="5"
    title="Get Running | Shoes for men"
    image={{
      url: "https://m.media-amazon.com/images/I/71+JSg40JqL._AC_UL320_.jpg",
      alt: "Shoes",
    }}
  />,
  <Card
  key="6"
    title="Up to 60% off | Styles for men"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
        alt: "Clothing",
        text: "Clothing",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
        alt: "Footwear",
        text: "Footwear",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
        alt: "Watches",
        text: "Watches",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
        alt: "Bags & Wallets",
        text: "Bags & Wallets",
      },
    ]}
  />,
  <Card
  key="7"
    title="Appliances for your home | Up to 55% off"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        alt: "AC",
        text: "Air Conditioning",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
        alt: "Fridge",
        text: "Refrigerators",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        alt: "micro go boom",
        text: "Microwave",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
        alt: "Washing",
        text: "Washing Machines",
      },
    ]}
  />,
  <Card
  key="8"
    title="Revamp your home in style"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
        alt: "Bedsheets",
        text: "Bedsheets, curtains & more",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
        alt: "Home deco",
        text: "Home Decoration",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
        alt: "Storage",
        text: "Home Storage",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg",
        alt: "Lights",
        text: "Lighting Solutions",
      },
    ]}
  />,
  <Card
  key="9"
    title="Starting ₹99 | All your home improvement needs"
    image={[
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg",
        alt: "Spin mops",
        text: "Spin mops, wipes & more",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg",
        alt: "Towels",
        text: "Bathroom hardware & accessories",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg",
        alt: "Tools",
        text: "Hammers, screwdrivers & more",
      },
      {
        url: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg",
        alt: "Electrical stuff",
        text: "Extension boards, plugs & more",
      },
    ]}
  />,
];

function shuffle(arr: any[]) {
  let ind = arr.length,
    rand;
  while (ind > 0) {
    rand = Math.floor(Math.random() * ind);
    ind--;
    [arr[ind], arr[rand]] = [arr[rand], arr[ind]];
  }
  return arr;
}

export default function Home() {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const search = document.getElementById("twotabsearchtextbox");
    const img = document.querySelector<HTMLImageElement>(".img-cont img");

    let i = 0;

    setInterval(() => {
      if (!img) return;
      img.style.opacity = "0";
      setTimeout(() => {
        const randomized = imgs[i];

        if (i == imgs.length) i = 0;
        else i++;

        img.src = img.srcset = randomized;

        setTimeout(() => {
          img.style.opacity = "1";
        }, 1000);
      }, 100);
    }, 10000);

    search?.addEventListener("focus", () => {
      setFocus(true);
    });

    search?.addEventListener("blur", () => {
      setFocus(false);
    });
  }, []);

  return (
    <main>
      <Head>
        <title>
          Online Shopping site in India: Shop Online for Mobiles, Books,
          Watches, Shoes and More - Amazon.in
        </title>
        <meta
          name="keywords"
          content="Amazon.in, Amazon, Online Shopping, online shopping india, india shopping online, amazon india, amazn, buy online, buy mobiles online, buy books online, buy movie dvd's online, kindle, kindle fire hd, kindle e-readers, ebooks, computers, laptop, toys, trimmers, watches, fashion jewellery, home, kitchen, small appliances, beauty, Sports, Fitness &amp; Outdoors"
        />
        <link rel="canonical" href="https://www.amazon.in/" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="fb:app_id" content="164734381262" />
        <meta
          property="og:image"
          content="https://m.media-amazon.com/images/I/51HCHFclmmL.jpg"
        />
        <meta
          property="og:description"
          content="Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping &amp; Cash on Delivery Available."
        />

        <meta
          name="description"
          content="Amazon.in: Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping &amp; Cash on Delivery Available."
        />

        <link rel="icon" href="https://www.amazon.in/favicon.ico" sizes="any" />
      </Head>

      <Header />
      <Ribbon />
      {focus && (
        <div
          id="nav-cover"
          style={{ height: "6262px", display: "block" }}
        ></div>
      )}

      {/* The background image of the lander page */}
      <div className="img-cont">
        <Image
          width={1114}
          height={446}
          priority={true}
          alt="Mobile bruh"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/Jupiter23/OPPO/Uber/V1/D98467701_PC_Hero_3000x1200._CB577020453_.jpg"
        ></Image>
      </div>

      {/* Grid of the cards */}
      <div id="grid">{shuffle(cardCollection)}</div>

      <Footer />
    </main>
  );
}
