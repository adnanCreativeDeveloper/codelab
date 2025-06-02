'use client';
import { useEffect, useState } from 'react';

const TypingAnimation = ({
    texts = [],
    speed = 100,
    pause = 1500,
    deletingSpeed = 50,
    loop = true,
    className = '',
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!texts.length) return;

        const currentText = texts[currentTextIndex];
        let timeout;

        if (isDeleting) {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (displayedText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, speed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pause);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentTextIndex, texts, speed, pause, deletingSpeed]);

    return <span className={className}>{displayedText}|</span>;
};

export default TypingAnimation;
