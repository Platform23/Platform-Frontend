import { useState, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { handleResponse } from '../utils/utils';
import { API_BASE_URL } from '../utils/constants';

export const useNetworkDetails = (uuid) => {
    const [network, setNetwork] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [access, setAccess] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchNetworkData();
    }, [uuid]);

    const fetchNetworkData = async () => {
        setLoading(true);
        try {
            const networkResponse = await fetch(`${API_BASE_URL}/networks/${uuid}`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const networkData = await handleResponse(networkResponse);
            setNetwork(networkData.data);

            // Check if user has access 
            const hasAccess = checkUserAccess(networkData.data);
            setAccess(hasAccess);

            if (hasAccess) {
                await fetchMessages(networkData.data.id);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchMessages = async (id) => {
        try {
            const messagesResponse = await fetch(`${API_BASE_URL}/messages/${id}`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const messagesData = await handleResponse(messagesResponse);
            setMessages(messagesData.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const requestIntegration = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/networks/${id}/request-integration`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return true;
        } catch (err) {
            setError(err.message);
            return false;
        }
    };

    const checkUserAccess = (networkData) => {
        return networkData.users.some((networkUser) => networkUser.pseudo === user.pseudo);
    };

    const sendMessage = async (message) => {
        try {
            const response = await fetch(`${API_BASE_URL}/messages`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            });

            await handleResponse(response);
        } catch (err) {
            console.log(err.message)
            setError(err.message);
        }
    };

    const deleteMessage = async (messageId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/messages/${messageId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            await handleResponse(response);
        } catch (err) {
            setError(err.message);
        }
    };

    return { network, messages, setMessages, loading, error, access, requestIntegration, fetchNetworkData, sendMessage, deleteMessage };
};
