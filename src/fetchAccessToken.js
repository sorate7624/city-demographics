import axios from 'axios';

export const fetchAccessToken = async () => {
  const CUSTOMER_KEY = '8cb9a5378bcf453c83d7';
  const CUSTOMER_SECRET = '4b53484f41c442f3ae8b';
  const URL =
    'https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?';
  const ACCESS_TOKEN_URL = `${URL}consumer_key=${CUSTOMER_KEY}&consumer_secret=${CUSTOMER_SECRET}`;

  try {
    const response = await axios.get(ACCESS_TOKEN_URL);

    const isSuccess = response.data.errCd === 0;
    if (isSuccess) {
      const token = response.data.result.accessToken;
      return token;
    } else {
      console.error('Error fetching access token:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
};
