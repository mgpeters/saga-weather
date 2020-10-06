export const formatHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = `${date.getHours()}`;
  let minutes = `0${date.getMinutes()}`;
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes.substr(-2)} ${ampm}`;
};

export const getDate = (day = null, locale = 'en-US') => {
  const dayObj = {};
  const today = !day ? new Date() : new Date(day * 1000);

  dayObj.weekday = today.toLocaleDateString(locale, { weekday: 'long' });
  dayObj.day = String(today.getDate()).padStart(2, '0');
  dayObj.month = String(today.getMonth() + 1).padStart(2, '0');
  dayObj.year = today.getFullYear();
  dayObj.date = `${dayObj.month}/${dayObj.day}/${dayObj.year}`;
  dayObj.dateNoYear = `${dayObj.month}/${dayObj.day}`;
  dayObj.fullDate = `${dayObj.weekday} ${dayObj.month}/${dayObj.day}/${dayObj.year}`;

  return dayObj;
};

export const weatherIcon = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

export const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

export const normalizePathname = (pathname) =>
  pathname.replace(/\//g, '').toLowerCase();
