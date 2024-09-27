
const Head = ({cardData})=>{

    const {imageId} = cardData;
    if(!imageId){
        return null;
    }
    return(
        <>
        <div className="carousel-card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+ imageId}
            alt="">
            </img>
        </div>
        </>
    )
}
export  default Head;