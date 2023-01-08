import Planets from "./Planets";

const PlanetsMap=()=>{
    const planets=[
        {name:"Mars", isGasPlanet: false},
        {name:"Jupiter", isGasPlanet: true},
        {name:"venus", isGasPlanet: false},
        {name:"Neptune", isGasPlanet: true},
        {name:"earth", isGasPlanet: false}
    ]

    return(
        <>
        <h1> gas Planets are:</h1>
        {
            planets.map((planet ,key)=>{
                return  <Planets key={key} name={planet.name} isGas={planet.isGasPlanet}/>
            })
        }
       
        </>
    );
}

export default PlanetsMap;