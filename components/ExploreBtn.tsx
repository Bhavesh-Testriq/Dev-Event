"use client"

import Image from "next/image"
import posthog from "posthog-js"

const ExploreBtn = () => {
  const handleExplore = () => {
    posthog.capture("events_explored")
  }

  return (
   <button id="explore-btn" type="button" className="mt-7 mx-auto" onClick={handleExplore}>
    <a href="#events">Explore Events</a>
    <Image src={"/icons/arrow-down.svg"} alt="arrow-down" width={24} height={24}/>
   </button>
  )
}

export default ExploreBtn