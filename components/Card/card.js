import {useState} from "react";
import style from "./style.module.css";


const Card = ({ imgUrl, brand, model, price, city, onClick }) => {

    const [isShowCity, setShowCity] = useState(false);
    return (
        <div className={style.card} onClick={() => console.log(brand)}>

            <img src={imgUrl} alt={`${brand} ${model}`}/>

            <div className={style.brandWrapper}>
            <h2>{brand}</h2>
            <h3>{model}</h3>
            <div>{price}</div>
            <button onClick={()=> {
                setShowCity(!isShowCity)}}>
                {isShowCity? <>Hide City</> : <>Show City</>}
                </button>
            {isShowCity && <div>{city}</div>}
            </div>
        </div>
    );
};

export default Card;