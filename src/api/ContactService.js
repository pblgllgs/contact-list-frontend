import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL_BACKEND;

export async function saveContact(contact) {
    return await axios.post(API_URL, contact);
}

export async function getContacts(page = 0, size = 12) {
    console.log("🚀 ~ file: ContactService.js:10 ~ getContacts ~ function:", API_URL)
    
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getContact(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function updateContact(contact) {
    return await axios.post(API_URL, contact);
}

export async function updatePhoto(formData) {
    return await axios.put(`${API_URL}/photo`, formData);
}

export async function deleteContact(id) {
    return await axios.delete(`${API_URL}/${id}`);
}