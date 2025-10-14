import { useState, useEffect } from "react";

export function useGetData (url) {
    const [info, setInfo] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    throw new Error('Error fetching data!')
                } else {
                    const data = await response.json()

                    setInfo(data)
                }
            } catch (error) {
                console.error('Fetch error:', error.message)
            }
        }

        getData()
    }, [])
    
    return [info]
}