"use client"

import { useEffect, useState } from "react"

export function useMobileTouch() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const isMobileWidth = window.innerWidth < 768
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
      const isLandscapeOrientation = window.innerWidth > window.innerHeight

      setIsMobile(isMobileWidth || isTouchDevice)
      setIsLandscape(isLandscapeOrientation && isMobileWidth)
    }

    checkDevice()

    window.addEventListener("resize", checkDevice)
    window.addEventListener("orientationchange", () => {
      // slight delay so orientation metrics are correct
      setTimeout(checkDevice, 100)
    })

    return () => {
      window.removeEventListener("resize", checkDevice)
      window.removeEventListener("orientationchange", checkDevice)
    }
  }, [])

  return { isMobile, isLandscape }
}
