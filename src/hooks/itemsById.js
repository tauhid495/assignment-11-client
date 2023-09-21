import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItemById = () => {

    const { itemId } = useParams();

    const [itemData, setItemData] = useState({});
    useEffect(() => {
        const url = `https://assignment-11-bw8x.onrender.com/item/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItemData(data));
    }, [])
    return [itemData, setItemData];

}
export default useItemById;