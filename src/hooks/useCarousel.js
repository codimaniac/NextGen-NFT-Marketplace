import { useEffect, useState } from "react"

export function useCarousel (items, itemPerSlide) {
    const [currentPage, setCurrentPage] = useState(1)
    let firstIndex = (currentPage - 1) * itemPerSlide
    let lastIndex = currentPage * itemPerSlide
    const [currentSlide, setCurrentSlide] = useState(items.slice(firstIndex, lastIndex))
    const [slideLength, setSlideLength] = useState(Math.ceil(items.length / itemPerSlide))
    const getPageNo = (n) => {
    let arr = []
    for (let index = 1; index <= n; index++) {
        arr.push(index)      
    }

    return arr
    }
    const slidePageNumbers = getPageNo(slideLength)

    useEffect(() => {
    setSlideLength(Math.ceil(items.length / itemPerSlide))
    setCurrentSlide(items.slice(firstIndex, lastIndex))
    console.log(currentSlide)
    }, [items, currentPage])
    
    const prevPage = () => {
    setCurrentPage(prev => prev - 1)
    }

    const nextPage = () => {
    setCurrentPage(prev => prev + 1)
    }

    return [currentPage, currentSlide, slidePageNumbers, prevPage, nextPage]
}