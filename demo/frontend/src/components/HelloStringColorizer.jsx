import { useEffect, useState } from "react";

export default function HelloStringColorizer({ text, onColor }) {
    const [textColor, setTextColor] = useState('rgb(0, 0, 0)');

    useEffect(() => {
        function randomColor() {
            const r = Math.floor(Math.random() * 250); // Avoiding full 255 to keep colors visible
            const g = Math.floor(Math.random() * 250);
            const b = Math.floor(Math.random() * 250);
            return `rgb(${r}, ${g}, ${b})`;
        }
        setTextColor(randomColor());
        onColor(textColor);
    }, [text]);

    return (
        <span style={{ color: textColor }}>
            {text}
        </span>
    );
}