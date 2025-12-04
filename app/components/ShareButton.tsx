"use client"

import { useEffect, useState } from "react"

export default function ShareButton({title, url}: {title: string; url: string}){
    const [showToast, setShowToast] = useState(false)

    const handleShare = async ()=> {
        if (navigator.share){
            try{
                await navigator.share({
                    title: title,
                    text: "Check out this supreme court judgment",
                    url: url
                })
            } catch(err){
                console.log("share cancelled")
            }
        } else{
            navigator.clipboard.writeText(url)
            setShowToast(true)
            setTimeout(()=> setShowToast(false), 2000)
        }
    }
     return(
        <div className="relative">
            <button 
            onClick={handleShare}
            className="w-full border border-[#002147] text-[#002147] font-bold py-4 rounded-lg hover:bg-gray-50 transition active:scale-95 flex items-center justify-center text-base md:text-lg">
                <span className="ml-2">Share Case</span>
            </button>

            {showToast && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#002147] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap animate-pulse">
                    
                    Link copied!
                    </div>
            )}
        </div>
     )
}