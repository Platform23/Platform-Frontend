import { useContext } from 'react';
import AuthContext from '../hooks/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/connexion" />;
    }

    return children;
};

export default PrivateRoute;
