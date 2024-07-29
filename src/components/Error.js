import { useRouteError } from "react-router-dom";

const Error= ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="imga">
            <img src="https://http.cat/images/404.jpg" alt="404 OOpss Not Found!"></img>
            <h3>{err.status}: {err.statusText}</h3>

        </div>
    )
}

export default Error;