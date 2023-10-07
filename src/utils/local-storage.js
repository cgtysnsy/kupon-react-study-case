const DATA_KEY = 'bets';

const isExpired = (d1) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date().getTime();

  return date1 < date2;
};

export const getCachedBets = () => {
  try {
    const rawData = localStorage.getItem(DATA_KEY);
    const data = JSON.parse(rawData);
    if (isExpired(data.expiresAt)) {
      return null;
    }
    return data.bets;
  } catch (err) {
    // do nothing
  }

  return null;
};

export const saveBets = (bets) => {
  const today = new Date();
  const HOUR = 3600 * 1000;
  const expiresAt = new Date(new Date().setTime(today.getTime() + 3 * HOUR));

  const data = {
    expiresAt: expiresAt,
    bets,
  };
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
};
