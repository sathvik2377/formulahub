const CLOUD_STORAGE_BASE_URL = 'https://storage.googleapis.com/YOUR-BUCKET-NAME';

const CLOUD_PATHS = {
    physics: `${CLOUD_STORAGE_BASE_URL}/physics`,
    mathematics: `${CLOUD_STORAGE_BASE_URL}/mathematics`,
    chemistry: `${CLOUD_STORAGE_BASE_URL}/chemistry`,
    allenHandbooks: `${CLOUD_STORAGE_BASE_URL}/allen-handbooks`
};

const ALLEN_HANDBOOKS = {
    physics: `${CLOUD_PATHS.allenHandbooks}/Allen Physics Handbook.pdf`,
    mathematics: `${CLOUD_PATHS.allenHandbooks}/Allen Maths Handbook.pdf`,
    chemistry: `${CLOUD_PATHS.allenHandbooks}/Allen Chemistry Handbook.pdf`
}; 