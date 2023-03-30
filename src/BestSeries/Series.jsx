import React from "react";
import Hotstar from "./Hotstar";
import Tvf from "./Tvf";

const favSeries = "Tvf";

  
// const FavS = () => {
//     if(favSeries === "Hotstar") {
//        return <Hotstar/>;
//     }
//     else if(favSeries === "Tvf") {
//         return <Tvf/>;
//     }
// }

const Series = () => (
    <>
        <h1 className="heading_style"> List of Series and Movies</h1>
        {/* <FavS /> */}

        {favSeries ==="Hotstar" ? <Hotstar /> : <Tvf />}
    </>
)

export default Series;