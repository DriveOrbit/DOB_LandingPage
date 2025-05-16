"use client";

import { useEffect, useState } from "react";

interface Position {
    x: number;
    y: number;
}

export default function CustomCursor() {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // Show cursor when it moves
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHidden(false);
        };

        // Check if cursor is over clickable element
        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = !!(
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                target.classList.contains("clickable") ||
                target.closest(".clickable")
            );

            setIsPointer(isClickable);
        };

        // Track mouse clicks
        const onMouseDown = () => {
            setIsClicked(true);
        };

        const onMouseUp = () => {
            setIsClicked(false);
        };

        // Hide cursor when it leaves the window
        const onMouseLeave = () => {
            setIsHidden(true);
        };

        // Add event listeners
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mouseleave", onMouseLeave);

        // Remove event listeners
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    // Don't render anything if the cursor is hidden
    if (isHidden) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <div
                className={`custom-cursor ${isPointer ? "pointer" : ""} ${isClicked ? "clicked" : ""
                    }`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            >                {/* Orbit SVG icon for cursor */}
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-svg"
                >
                    <circle cx="20" cy="20" r="5" fill="var(--cursor-color)" />
                    <circle
                        cx="20"
                        cy="20"
                        r="12"
                        stroke="var(--cursor-color)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        className="orbit"
                    />
                    <circle
                        cx="20"
                        cy="20"
                        r="18"
                        stroke="var(--cursor-color)"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        className="outer-orbit"
                    />
                </svg>
            </div>

            {/* Trail effect */}
            <div
                className="cursor-trail"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}