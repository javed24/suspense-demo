const fetchInvoice = () => {
  return fetch("https://randomapi.com/api/03zx1cai?key=9QUZ-5AFE-8CSJ-FZ5G")
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        return Promise.reject(new Error(response.error));
      }
      return response.results[0];
    });
};

export { fetchInvoice };
