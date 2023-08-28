export const DASHBOARD_SET_USERNAME = 'DASHBOARD.SET_NAME';

export const setUsername = (username) => {
    return {
        type: DASHBOARD_SET_USERNAME,
        username
    };
};