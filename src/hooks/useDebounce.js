import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timeoutRef = useRef();

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (...args) => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => callback(...args), delay);
    };
};

export default useDebounce;