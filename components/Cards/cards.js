
import style from "./style.module.css";
import Card from "../Card/card";
import { useState } from "react";

const Cards = () => {
    const [card, setCard] = useState([{
        imgUrl: "https://media.cdn-jaguarlandrover.com/api/v2/images/104583/w/640",
        brand: "LAND ROVER",
        model: "Range Rover Sport",
        price: 15000,
        city: "Vilnius",
    },
    {
        imgUrl: "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=25XK&client=byoc&paint=P0300&fabric=FLKSW&sa=S01CE,S01MA,S01TE,S0302,S0319,S0322,S03MC,S03MF,S0402,S0420,S0423,S0459,S04FL,S04GQ,S04HB,S04MA,S04MC,S04NB,S0552,S05AC,S05AS,S05DW,S0688,S06AC,S06AK,S06C4,S06CP,S06NX,S06U3,S0776,S07M9&angle=30",
        brand: "BMW",
        model: "X5",
        price: 25000,
        city: "Kaunas",
    },
    {
        imgUrl: "https://static.theprint.in/wp-content/uploads/2022/11/Wranglr-Rubicon-696x392.jpg?compress=true&quality=80&w=376&dpr=2.6",
        brand: "JEEP",
        model: "Wrangler",
        price: 19000,
        city: "Utena",
    },
    {
        imgUrl: "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAA_y2VTcstORGAz3uv986gcNUZRAQFVy_igJX0dyMvOuMsBDcDDrO5i0ulO530m_THSSXd5zRu_QP-C2GWbsT_MCt3bnTh0pUbEQSrxV7k6dRHKlWVdH_5j8urFC4v37795Ff_-d53jPlL_eJyua2Xy-WB5S_efvLlP7_7r9fvf_7X_4tff3V5FVNQywObfPbi6-OERsPzqs03H14bvyj0753O73__Tfnwtz_-4A-_VH_P_vTnn_77x7_76veXV6eX5eHhCx7ee8PD1357-d94an5zan54zl-_eHm5fOPn_PL55XzefJiCXzHg9JOgaV1mGjf97R9lUhXFUFd50-d5VxV5KbRuUeu6qrNGZaixRiz6D3ihb-GCMGDedzTLTla3FooplrcMMpEVIIuPxFVcoaw-mlZATFogoApyZehexsAIYhWAZqo7zSBR9IB2k30DOKoiKYY3G5usK2sBSVc3zzAaz5kvyTAmM52zUIadcReuAEx9u3cMwiYB7lvlGlBopUuM-Jz1jE36FZRaqgFBeaV4g2rZJUlQEcU2QdfvNQfqLGZWQrd0XVNBt-IYc4YaU8Hoxi1j9OPOwn3LegE9aqk8I-S8WK_HfEjQDxyIdeMg7xVopTJTMOI1lqA7PY8t6DOeBz3aOk4MX08S9GprLqqmseYImijphhHNIbj8veDNDzpVvM9h2CXXczC0eYbdN443eGq4IMPSD6uEIYzZVsJAKnFGA63lablRbRgHDVwCo4c2CMbcmgaMs-I-MDbxzJiW2I5g1pBz7iZgE0_ErcvA0GqkAbNjdc_AojEcwWpVcXmsDlieMyqfGSOK-cRUzVcG5TOBdehsCZb2ZryDTb3jhtu7ynhL40yp7GAMVPgaHAZXIoOuToJTqiJibGIqwflD3Atw03oNDYMKbodbJqNObOXRgQuTPCoGSczAEZYdr0JjziVwlNwpTNa5HNyxVVxyj13pavDK5qYH363XqwTf9_OzYCya9-k1euEZ8_VgyxEb7q13qPnseqfqHBldXZ3w2p5CytYM_BLqlR0CytvO2JCL5Um3GwciyjrWpam2K0xIla5g6mngwz4N2FILk0sNpzItON4kI_apgnnG4S4Z83BIWHEy3PfV4BAFXM00XBkJkRGwT0IyUvuMELpFhxxC72rOPfAh5JsTtN-4AUEHadiSotAZEKriVjAsCsFIghtAKjR8ZagLg2NhF6--BOptoWsgjdeRMVDGHaPhyPhgknHtyiajmuXA0LnnNUdbYM44hFdADp9vbDlj7RuGbTgxmgOJHmiZyxv7rak-hcFWYwVEtnAdI-R39ovRcI9oWwa-HbSHhqtE-9HyJ4gOn08c6EhiRohuK4YK4mpaJRlepQxiGEr-EsWw5x2b0DpHFm76uuUQdy83y0iSWHdfpV4ZR8bt35STXOttcYZT2Ra6SoQtbu1xgx19G5ER9C5gJ6z1CSrMAIcK2Y5wcINjD8eoi0PB4bZc1XAQiXDAEfsq8SyGzWZwJNtO4md63sawzJOe49OvY-rH5XEf-2ifZJuJR6tHY-OTLArxiH61-BRD0o8dTnwnnz7-4rPs03cfv8veCZG9-8XSP-LMv6A48h_h6VO8-9P5kaLWYZwNzsbrJ1k-Ures7L47fSd9TXru9FP24Ute7b8hWjB4AQcAAA?mimetype=image/png",
        brand: "AUDI",
        model: "Q8",
        price: 34000,
        city: "Alytus",
    },
   ]);

//    const handleCardClick = (brand) => {
//     console.log(brand);
//   };

    return (
    <div className={style.cards}>
    {card.map((c, index) => {
    return <Card
                 key={index}
                 imgUrl={c.imgUrl}
                 brand={c.brand}
                 model={c.model}
                 price={c.price}
                 city={c.city}
                 />
            })}
        </div>
    );
};

export default Cards;