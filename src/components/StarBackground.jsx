import { useEffect, useState } from "react"

// star ID, size, x, y

export const StarBackground = () => {

    const [stars, setStars] = useState([])

    useEffect(() => {
        generateStars();
  
        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            window.innerWidth*window.innerHeight / 25000
        );
    
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random()*3 + 1,
                x: Math.random()*100,
                y: Math.random()*100,
            });
        }

        setStars(newStars);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%", 
                    top: star.y + "%",
                }}/>
            ))}
        </div>
    );
};