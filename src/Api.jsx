import axios from 'axios';
import React from 'react';

const BASE_URL = `https://api.codeyogi.io/`;

export const getLectures = async ({showAlert}) => {
try {	const response = await axios.get(BASE_URL + 'batches/1/sessions', {
		withCredentials: true
	});
	const users = response.data;
	saveData('lecture', users);
 
	return users;
  } catch {
		showAlert('Lectures Loading Failed', 'error', 5);
		return [];
	}
};

export const getProfile = async ({ showAlert}) => {
	try {const response = await axios.get(BASE_URL + 'me', { withCredentials: true });
	const users = response.data.data;
  showAlert("Profile Loaded")
	return users;
    } catch {
		showAlert('Profile Loading Failed', 'error', 5);
		return [];
	}
};

export const getAssignments = async ({ showAlert}) => {
	try {
		const response = await axios.get(BASE_URL + 'batches/1/assignments', {
			withCredentials: true
		});
		const users = response.data;

		return users;
	} catch {
		showAlert('Assignments Loading Failed', 'error', 5);
		return [];
	}
};
export const details = async (data,{showAlert}) => {
  try {
	const response = await axios.get(BASE_URL + `assignments/${data}`, {
		withCredentials: true
	});
	const users = response.data;
	saveData('details', users);
    showAlert("Details Loaded")
	return users;
    } catch {
		showAlert('Details Loading Failed', 'error', 5);
		return [];
	}
};

export const saveData = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getSavedData = key => {
	const value = JSON.parse(localStorage.getItem(key));
	return value;
};

export const putAssignment = (id, submissionLink) => {
	saveData(`${id}`, submissionLink);
	axios.put(
		BASE_URL + `assignment/${id}/submit`,
		{ submissionLink },
		{ withCredentials: true }
	);
};
