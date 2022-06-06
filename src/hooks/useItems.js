import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://pacific-reef-07454.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems];
}

export default useItems;