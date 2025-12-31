import { useEffect, useState } from "react";

export function useTypewriter(
    words,
    active = true,
    {
        typingSpeed = 80,
        deletingSpeed = 40,
        delayBetween = 1500
    } = {}
) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!active) return;

        const currentWord = words[index % words.length];
        let timeout;

        if (!isDeleting && text.length < currentWord.length) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, delayBetween);
        }

        if (isDeleting && text.length > 0) {
            timeout = setTimeout(() => {
                setText(currentWord.slice(0, text.length - 1));
            }, deletingSpeed);
        }

        if (isDeleting && text.length === 0) {
            setIsDeleting(false);
            setIndex(prev => prev + 1);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words, active, typingSpeed, deletingSpeed, delayBetween]);

    return text;
}