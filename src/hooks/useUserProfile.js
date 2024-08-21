import { useState, useEffect } from 'react';
import { handleResponse } from '../utils/utils';
import { API_BASE_URL } from '../utils/constants';

export const useUserProfile = (userId) => {
    const [user, setUser] = useState(null);
    // const [userXp, setUserXp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserProfile();
        fetchUserExperience();
    }, [userId]);

    const fetchUserProfile = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setUser(data.data);
        } catch (err) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateUserProfile = async (id, updatedData) => {
        try {
            setLoading(true);

            const response = await fetch(`${API_BASE_URL}/users/${id}`, {
                method: "PUT",
                credentials: 'include',
                body: updatedData,
            });

            const data = await handleResponse(response);
            setUser(data.data);
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    const addUserExperience = async (updatedData) => {
        try {
            setLoading(true);

            const response = await fetch(`${API_BASE_URL}/experiences`, {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            const data = await handleResponse(response);
            setUser(data.data);
        } catch (err) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    const fetchUserExperience = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/experiences/${userId}`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setUser(data.data);
        } catch (err) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const removeUserExperience = async (experienceId) => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/experiences/${experienceId}`, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setUser(data.data);
        } catch (err) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { 
        user, 
        loading, 
        error, 
        fetchUserProfile, 
        updateUserProfile, 
        addUserExperience, 
        fetchUserExperience, 
        removeUserExperience 
    };
};
