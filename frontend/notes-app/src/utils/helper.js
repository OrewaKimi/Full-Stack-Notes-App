export const validateEmail = (email) => { // Corrected the function name
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};