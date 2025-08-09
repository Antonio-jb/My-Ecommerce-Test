import React from "react";
import SmartSearch from "../components/SmartSearch";

const Home: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to my little test Store</h1>
            <SmartSearch />
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 900,
        margin: "40px auto",
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderRadius: 12,
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
        color: "#333",
        textAlign: "center" as const,
        marginBottom: 30,
        fontWeight: "700",
        fontSize: "2.5rem",
        textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    },
};


export default Home;
