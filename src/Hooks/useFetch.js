import { useEffect, useState } from "react"

const useFetch = (url) =>{
    // state to access res.products local data to access globally
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url).then(res=>{
            res.json().then(res=>{
                setData(res.products)
            })
        })
    },[url])

    return data
}

export default useFetch;