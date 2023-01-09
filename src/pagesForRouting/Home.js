import { AppContext } from '../App'
import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios';


export const Home=()=>{
    const {username} = useContext(AppContext)
    
    
    const {data, isLoading, refetch} =useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    });

    if (isLoading){
        return <h1>...Loading</h1>
    }

    
    return(
        <>
        <h1>This is Home Page of {username}</h1>
        <h1>Cat Fact: {data?.fact}</h1>
        <button onClick={refetch}>Update</button>
        </>
    );
}