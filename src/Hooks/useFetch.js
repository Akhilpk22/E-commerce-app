import { useEffect, useState } from "react"
// this is custom hooks manage and create 
// 1.create name in starting use the name 

const useFetch = (url)=>{

    const [data,setdata]= useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(result=>{
                setdata(result.products)
            })
        })
    },[url])
    return data
}
export default useFetch;