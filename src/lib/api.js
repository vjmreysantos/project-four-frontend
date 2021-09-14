import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function getHeaders() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * Jordan Requests

export function getAllJordans() {
  return axios.get(`${baseUrl}/jordans/`)
}

export function getSingleJordan(jordanId) {
  return axios.get(`${baseUrl}/jordans/${jordanId}`)
}

export function addNewJordan(formData) {
  return axios.post(`${baseUrl}/jordans/`, formData, getHeaders())
}

export function editJordan(jordanId, formData) {
  return axios.put(`${baseUrl}/jordans/${jordanId}/`, formData, getHeaders())
}

export function deleteJordan(jordanId) {
  return axios.delete(`${baseUrl}/jordans/${jordanId}/`, getHeaders())
}

// * Auth Requests

export function registerUser(formData) {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

// * Auth Requests

//? GET CURRENT USER PROFILE.
export const getMyProfile = () => {
  return axios.get(`${baseUrl}/auth/myprofile/`, getHeaders())
}

//? GET ALL USERS.
export const getAllUsers = () => {
  return axios.get(`${baseUrl}/auth/users/`, getHeaders())
}

//? GET A SINGLE USER.
export const getAUser = username => {
  return axios.get(`${baseUrl}/auth/profile/${username}/`, getHeaders())
}

//? PUT TO EDIT CURRENT USER.
export const editProfile = data => {
  return axios.put(`${baseUrl}/auth/myprofile/`, data, getHeaders())
}

//? DELETE USER PROFILE.
export const deleteProfile = () => {
  return axios.delete(`${baseUrl}/auth/myprofile/`, getHeaders())
}