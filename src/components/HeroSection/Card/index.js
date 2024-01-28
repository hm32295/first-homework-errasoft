import "./index.css";

export default function Card(props){
    return(
        <div className="card"> 
            <img src={"./" + props.imgName} alt="img"/>
            <h2>{props.Name}</h2>
            <p>{props.description}</p>
        </div>
    );
}