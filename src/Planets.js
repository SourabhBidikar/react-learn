

const Planets=(props)=>{
    return(
        <div>
            
            {props.isGas?<h1>{props.name}</h1>:null}
        </div>
    );

 }

 export default Planets;