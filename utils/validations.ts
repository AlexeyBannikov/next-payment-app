export const phoneValidation = (phone: string) => {
  phone = phone.replace(/[^+\d]/g, '').substring(1);

  if (phone.length === 11) {
    return true;
  }

  return false;
};

export const amountValidation = (amount: string) => {
  if (+amount > 0 && +amount < 1001) {
    return true;
  }

  return false;
};
