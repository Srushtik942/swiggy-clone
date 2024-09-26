

import { SWIGGY_CAROUSEL_URL } from "../../utils/constants";

const Head =(props) =>{
    const {Datares} = props;
    const {imageId} = Datares?.id || {};

    return(
        <div className=" carousel-card">

            <img src={SWIGGY_CAROUSEL_URL+ imageId}
            alt="img"></img>
            </div>

    );

};
export  default Head;