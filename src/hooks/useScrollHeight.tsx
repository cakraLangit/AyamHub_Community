'use client'

import { useState, useEffect } from 'react';


export const useScrollHeight = (hight: number = 0): boolean =>{

    const [ishight, setIsHight] = useState(false);


    useEffect(() => {
        const stayOnTop = ()=>{
            setIsHight(window.scrollY>hight)
        }


        window.addEventListener('scroll', stayOnTop)

        return () => window.removeEventListener('scroll',stayOnTop)
        // tidak bisa pakai ternary karena return harus berupa fungsi cleanup/ kebalikan

        // return () => ishight ?  window.addEventListener('scroll', stayOnTop)  :  window.removeEventListener('scroll',stayOnTop) 
    },[ishight])
    console.log(ishight)
    return ishight

}