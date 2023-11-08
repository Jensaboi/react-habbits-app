export function getPaddingDays(year, month) {
    const lastDayOfPreviousMonth = new Date(year, month, 0);
    const lastDayOfWeek = lastDayOfPreviousMonth.getDay();
    return lastDayOfWeek;
}

export const getMonthYear = (year, month, days) => {
    let date = new Date(Date.UTC(year, month, days));
    const options = { month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-Us", options).format(date);
};
