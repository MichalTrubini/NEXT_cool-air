import { useEffect, useState } from "react";

export function ScreenWidth() {

    const [screenWidth, setScreenWidth] = useState(0);
    
    useEffect(() => {
        const widthInitial = window.innerWidth;
        setScreenWidth(widthInitial);
    
        function getWindowDimensions() {
          const widthCurrent = window.innerWidth;
          return widthCurrent;
        }
    
        function handleResize() {
          setScreenWidth(getWindowDimensions());
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      return screenWidth
}