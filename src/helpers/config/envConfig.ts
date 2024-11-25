export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://ecom-manager-backend.vercel.app/api/v1";
};

// http://localhost:3030/api/v1