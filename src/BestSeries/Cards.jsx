import React from "react";
import Images from "./Images";

function Card(Props) {
    // console.log(Props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={Props.imgsrc}/>
                    <div className="card__info">
                        <span className="card__category">{Props.title}</span>
                        <h3 className="card__title">{Props.sname}</h3>
                        <a href={Props.link} target = "_blank" rel="noreferrer">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;