const timeFormat = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const minutesReminder = minutes % 6;
    return `${hours}h ${minutesReminder}m`
}

export default timeFormat;