import React, { useState } from "react";
import productsData from "../data/products.json";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    description: string;
    rating: number;
    image?: string;
}

console.log("Loaded products:", productsData);

const SmartSearch: React.FC = () => {
    console.log("SmartSearch render");
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
    const [loading, setLoading] = useState(false);

    // fallback simple filter
    const localFallback = (text: string): Product[] => {
        const lower = text.toLowerCase();
        let category: string | null = null;
        let maxPrice: number | null = null;
        let minRating: number | null = null;

        if (lower.includes("shoes") || lower.includes("sport")) category = "Sportswear";
        if (lower.includes("device") || lower.includes("electronic")) category = "Electronics";
        if (lower.includes("wear") || lower.includes("clothe")) category = "Clothing";
        if (lower.includes("wear") || lower.includes("accessories")) category = "Accessories";
        if (lower.includes("desk") || lower.includes("home")) category = "Home";
        if (/\d+/.test(lower)) maxPrice = Number(lower.match(/\d+/)?.[0]);
        if (lower.includes("good reviews") || lower.includes("high rating")) minRating = 4;

        let results = productsData;
        if (category) results = results.filter((p) => p.category.toLowerCase() === category?.toLowerCase());
        if (maxPrice != null) results = results.filter((p) => p.price <= maxPrice!);
        if (minRating != null) results = results.filter((p) => p.rating >= minRating!);

        return results;
    };



    const handleSearch = (text: string) => {
        setQuery(text);
        if (text.trim() === "") {
            setFilteredProducts(productsData);
            return;
        }

        setLoading(true);

        const results = localFallback(text);
        setFilteredProducts(results);

        setLoading(false);
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Search products (e.g. sport, electronic, clothe, accessories, home, price, good reviews)"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                style={styles.input}
            />
            {loading && <p style={styles.loading}>Loading...</p>}
            <ul style={styles.list}>
                {filteredProducts.map((p) => (
                    <li key={p.id} style={styles.listItem}>
                        <b style={styles.productName}>{p.name}</b> - <span style={styles.price}>${p.price}</span> <br />
                        <i style={styles.category}>{p.category}</i> <br />
                        <img src={p.image} alt={p.name} style={styles.image} />
                        <p style={styles.description}>{p.description}</p>
                        <span style={styles.rating}>⭐ {p.rating}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 12,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    input: {
        width: "95%",
        padding: "12px 15px",
        fontSize: 16,
        borderRadius: 8,
        border: "1.5px solid #ddd",
        marginBottom: 20,
        outline: "none",
        transition: "border-color 0.3s ease",
    },
    loading: {
        color: "#666",
        fontStyle: "italic",
        marginBottom: 10,
    },
    list: {
        listStyle: "none",
        paddingLeft: 0,
    },
    listItem: {
        padding: 15,
        borderBottom: "1px solid #eee",
        transition: "background-color 0.2s ease",
        cursor: "default",
    },
    productName: {
        fontSize: "1.2rem",
        color: "#222",
    },
    image: {
        width: "15%",
        height: "auto",
        borderRadius: 8,
        objectFit: "cover" as const,
        marginBottom: 8,
    },
    price: {
        color: "#2a9d8f",
        fontWeight: "700",
    },
    category: {
        color: "#555",
        fontSize: 14,
    },
    description: {
        marginTop: 5,
        marginBottom: 8,
        color: "#666",
        fontSize: 14,
    },
    rating: {
        backgroundColor: "#f4a261",
        color: "white",
        padding: "3px 8px",
        borderRadius: 12,
        fontWeight: "700",
        fontSize: 14,
    },
};

export default SmartSearch;
