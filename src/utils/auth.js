const TOKEN_KEY = 'PaymentByCashier_key';

const SetAuth = (token) => {
  const data = window.btoa(JSON.stringify(token));
  localStorage.setItem(TOKEN_KEY, data);
};

const GetAuth = () => {
  try {
    const butter = localStorage.getItem(TOKEN_KEY);
    const data = JSON.parse(window.atob(butter));
    return data;
  } catch (error) {
    return '';
  }
};

const RemovAuth = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { SetAuth, GetAuth, RemovAuth };
