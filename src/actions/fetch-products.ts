export const fetchProducts = () => {
  return fetch(process.env.REACT_APP_API_URL!).then((response) =>
    response.json()
  );
};
