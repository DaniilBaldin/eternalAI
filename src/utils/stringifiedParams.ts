import queryString from 'query-string';

export const stringifiedParams = queryString.stringify({
    client_id: import.meta.env.VITE_CLIENT_ID,
    redirect_uri: `${import.meta.env.VITE_BASE_URL}/google/auth`,
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
});

export const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
