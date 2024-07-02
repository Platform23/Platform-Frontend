import { useState, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { handleResponse } from '../utils/utils';
import { API_BASE_URL } from '../utils/constants';

export const useNetworks = () => {
    const [networks, setNetworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchNetworks = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/networks/user-networks`, {
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await handleResponse(response);
                setNetworks(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchNetworks();
        } else {
            setLoading(false);
        }
    }, [user]);

    return { networks, loading, error };
};
