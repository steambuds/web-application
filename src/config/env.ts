const env = {
    apiUrl: import.meta.env.VITE_API_URL,
    environment: import.meta.env.MODE || "development",
};

export default env;