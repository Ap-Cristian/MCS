export function getCurrentDateAndTimeToString(): string {
    let now_timestamp = Date.now();
    let date = new Date(now_timestamp);
    let time_hours = date.getHours();
    let time_minutes = date.getMinutes();
    let time_seconds = date.getSeconds();
    let time_milliseconds = date.getMilliseconds();

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getUTCDay() + 1}` +
        `T${time_hours}:${time_minutes}:${time_seconds}:${time_milliseconds}`;
}