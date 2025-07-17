import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bugs';

export const fetchBugs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBug = async (bugData) => {
    const response = await axios.post(API_URL, bugData);
    return response.data;
};

export const updateBug = async (bugId, updatedData) => {
    const response = await axios.put(`${API_URL}/${bugId}`, updatedData);
    return response.data;
};

export const deleteBug = async (bugId) => {
    await axios.delete(`${API_URL}/${bugId}`);
};