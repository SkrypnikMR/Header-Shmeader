export const getRequest = async (url, optionalHeaders = {}) => {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
  const options = { method: 'GET', headers };
  const answer = await fetch(url, options);
  return answer.json();
};
export const postRequest = async (url, body, optionalHeaders = {}) => {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };
  const answer = await fetch(url, options);
  return answer.json();
};

export const putRequest = async (url, body, optionalHeaders = {}) => {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
  const options = {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  };
  const answer = await fetch(url, options);
  return answer.json();
};
export const createAuthHeader = (support) => { return { Authorization: support.getCookie('token') }; };
