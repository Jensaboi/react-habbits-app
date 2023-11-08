export function getPaddingDays(year, month) {
    const lastDayOfPreviousMonth = new Date(year, month, 0);
    const lastDayOfWeek = lastDayOfPreviousMonth.getDay();
    return lastDayOfWeek;
}
