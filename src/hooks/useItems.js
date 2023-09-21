import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-bw8x.onrender.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems];
}

export default useItems;