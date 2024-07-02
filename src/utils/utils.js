export const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = response.status === 422 ? errorData.messages[0].message : errorData.message;
        throw new Error(errorMessage);
    }
    return response.json();
};