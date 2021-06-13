export const getRequest = async (url, optionalHeaders = {}) => {
  const headers = Object.assign({}, optionalHeaders);
  const options = { method: 'GET', headers };
  const answer = await fetch(url, options);
  const result = await answer.json();
  return result;
};
export const postRequest = async (url, body, optionalHeaders = {}) => {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  };
  const answer = await fetch(url, options);
  const result = await answer.json();
  return result;
};

export const putRequest = async (url, body, optionalHeaders = {}) => {
  const headers = Object.assign({ 'Content-Type': 'application/json' }, optionalHeaders);
  const options = {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  };
  const answer = await fetch(url, options);
  const result = await answer.json();
  return result;
};
export const createAuthHeader = (support) => { return { Authorization: support.getCookie('token') }; };
