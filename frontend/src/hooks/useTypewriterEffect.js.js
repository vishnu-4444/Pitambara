import { useEffect, useState, useRef } from "react";

const useTypewriterEffect = ({ text = "", speed = 40, start = false }) => {
    const [typedText, setTypedText] = useState("");
    const indexRef = useRef(0);

    useEffect(() => {
        // Reset state when start changes
        setTypedText("");
        indexRef.current = 0;
        
        if (!start) return;

        if (typeof text !== "string" || text.length === 0) {
            console.warn("TypewriterEffect: `text` is not a valid string!", text);
            return;
        }

        // Split text into lines
        const lines = text.split('\n');
        const maxLength = Math.max(...lines.map(line => line.length));
        
        const interval = setInterval(() => {
            if (indexRef.current < maxLength) {
                setTypedText(() => {
                    const currentIndex = indexRef.current;
                    const result = lines.map(line => {
                        return line.substring(0, currentIndex + 1);
                    }).join('\n');
                    indexRef.current++;
                    return result;
                });
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [start, text, speed]);

    return typedText || "";
};

export default useTypewriterEffect;