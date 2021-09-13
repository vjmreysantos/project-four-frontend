import axios from 'axios'
import { getToken } from '../lib/auth'

const baseUrl = '/api'

function getHeaders() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * Jordan Requests

export function getAllJordans() {
  return axios.get(`${baseUrl}/jordans`)
}

export function getSingleJordan(jordanId) {
  return axios.get(`${baseUrl}/jordans/${jordanId}`)
}

export function listNewJordan(formData) {
  return axios.post(`${baseUrl}/jordans`, formData, getHeaders())
}

export function editJordan(jordanId, formData) {
  return axios.put(`${baseUrl}/jordans/${jordanId}`, formData, getHeaders())
}

export function deleteJordan(jordanId) {
  return axios.delete(`${baseUrl}/jordans/${jordanId}`, getHeaders())
}

// * Auth Requests

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}