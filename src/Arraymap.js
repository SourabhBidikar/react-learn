const names=["Sourabh","Apurva", "Rutuja"]

const Arraymap=()=>{
    return(
        <>
        {names.map((name,key)=>{
            return <h3 key={key}>{name}</h3>

        })}
    </>
    );
}

export default Arraymap;