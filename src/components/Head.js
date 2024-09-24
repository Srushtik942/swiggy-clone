

const Head =(props) =>{
    const {Datares} = props;
    const {imageId} = Datares?.id || {};

    return(
        <div className="rounded-lg">

            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
            + imageId}
            ></img>
            </div>

    );

};
export  default Head;