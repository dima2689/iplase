export function compareDates(date1, date2) {
    if (!date1) {
        return 1; // move itemA to the end of the array
    }
    if (!date2) {
        return -1; // move itemB to the end of the array
    }

    // Convert the date strings to Date objects
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Compare the dates
    if (d1.getTime() === d2.getTime()) {
        return 0; // dates are equal
    }
    if (d1 < d2) {
        return -1; // date1 is earlier than date2
    }
    return 1; // date1 is later than date2
}
