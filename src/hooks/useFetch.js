import { useState, useEffect } from "react";

export function useGetData (url) {
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(url)

                if (!response.ok) {
                    setIsLoading(false)
                    setIsError("Error Fetching Data!")
                    throw new Error('Error fetching data!')
                } else {
                    const data = await response.json()

                    setInfo(data)
                    setIsLoading(false)
                }
            } catch (error) {
                console.error('Fetch error:', error.message)
                setIsLoading(false)
                setIsError(error.message)
            }
        }

        getData()
    }, [])
    
    return [info, isLoading, isError]
}