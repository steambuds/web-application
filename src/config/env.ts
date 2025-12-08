const env = {
    apiUrl: import.meta.env.VITE_API_URL || "https://api.steambuds.com/api/v1/hello",
    environment: import.meta.env.MODE || "development",
};

export default env;
