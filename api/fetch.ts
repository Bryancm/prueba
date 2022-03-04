const fetcher = (url: RequestInfo, options?: RequestInit) => {
  const API_ID = process.env.API_ID || "";
  const headers = { "app-id": API_ID };

  if (options && options.headers) options.headers = { ...options.headers, ...headers };
  if (options && !options.headers) options.headers = headers;
  if (!options) options = { headers };

  return fetch(url, options);
};

export default fetcher;
