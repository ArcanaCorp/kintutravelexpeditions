import { useEffect, useRef } from "react";

export const usePreloadImagesOnVisible = (urls = []) => {

    const ref = useRef(null);

    useEffect(() => {

        if (!ref.current) return;

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (!entry.isIntersecting) return;

                urls.forEach(url => {

                    if (!url) return;

                    const img = new Image();
                    img.src = url;

                });

                observer.disconnect();

            },

            {
                rootMargin: "300px",
            }

        );

        observer.observe(ref.current);

        return () => observer.disconnect();

    }, [urls]);

    return ref;

};