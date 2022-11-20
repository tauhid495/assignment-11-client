import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-production.up.railway.app/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems];
}

export default useItems;