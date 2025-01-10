import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

const images = [
    "/dizengoff_mommies/sliding_images/IMG_0841.jpg",
    "/dizengoff_mommies/sliding_images/IMG_1048.jpg",
    "/dizengoff_mommies/sliding_images/IMG_1213.jpg",
    "/dizengoff_mommies/sliding_images/img-1.jpg",
    "/dizengoff_mommies/sliding_images/img-2.jpg",
    "/dizengoff_mommies/sliding_images/img-3.jpg",
];
const interval = 3000;

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Clone images to create an infinite loop effect
    const extendedImages = [...images, images[0]];

    // Change image every `interval` milliseconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedImages.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [extendedImages.length]);

    // Handle the end of transition to create seamless looping
    const handleTransitionEnd = () => {
        if (currentIndex === extendedImages.length - 1) {
            // Jump to the first original image without animation
            setIsTransitioning(false);
            setCurrentIndex(0);

            // Re-enable the transition after resetting (without animation glitch)
            setTimeout(() => setIsTransitioning(true), 10);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "500px",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {extendedImages.map((image, index) => (
                <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`Slide ${index}`}
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: {xs: `${(index - currentIndex) * 100}%`, lg: `${(index - currentIndex) * 100}%`},
                        transition: isTransitioning ? "left 0.5s ease-in-out" : "none",
                        objectFit: {xs: "cover", lg: "contain"},
                    }}
                    onTransitionEnd={handleTransitionEnd}
                />
            ))}
        </Box>
    );
};

export default ImageSlider;