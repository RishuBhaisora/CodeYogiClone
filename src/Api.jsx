import axios from 'axios';
import React from 'react';

const BASE_URL = `https://api.codeyogi.io/`;

export const getLectures = async () => {
	const response = await axios.get(BASE_URL + 'batches/1/sessions', {
		withCredentials: true
	});
	const users = response.data;
	saveData('lecture', users);
	return users;
};

export const getProfile = async () => {
	const response = await axios.get(BASE_URL + 'me', { withCredentials: true });
	const users = response.data.data;
	return users;
};

export const getAssignments = async () => {
	const response = await axios.get(BASE_URL + 'batches/1/assignments', {
		withCredentials: true
	});
	const users = response.data;
	saveData('assignments', users);
	return users;
};
export const details = async data => {
	const response = await axios.get(BASE_URL + `assignments/${data}`, {
		withCredentials: true
	});
	const users = response.data;
	saveData('details', users);
	return users;
};

export const saveData = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

export const getSavedData = key => {
	const value = JSON.parse(localStorage.getItem(key));
	return value;
};

export const putAssignment = (id, submissionLink) => {
	axios.put(
		BASE_URL + `assignment/${id}/submit`,
		{ submissionLink },
		{ withCredentials: true }
	);
};