// Replace 'YOUR_CLOUD_NAME' with your actual cloud name from Cloudinary dashboard
// Example: const CLOUDINARY_CLOUD_NAME = 'dxyzabc123';
const CLOUDINARY_CLOUD_NAME = 'dmvvzmtr0';
const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload`;

const CLOUDINARY_PATHS = {
    physics: `${CLOUDINARY_BASE_URL}/physics`,
    mathematics: `${CLOUDINARY_BASE_URL}/mathematics`,
    chemistry: `${CLOUDINARY_BASE_URL}/chemistry`,
    allenHandbooks: `${CLOUDINARY_BASE_URL}/allen-handbooks`
}; 