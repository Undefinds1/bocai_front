const TOKEN_KEY = 'PaymentByCashier_Token';

const Settoken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const Gettoken = () => localStorage.getItem(TOKEN_KEY);

const Removtoken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { Settoken, Gettoken, Removtoken };
