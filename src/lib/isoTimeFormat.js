const isTimeFormat = (dateTime) => {
  const localTime = new Date(dateTime).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  return localTime;
};

export default isTimeFormat;
