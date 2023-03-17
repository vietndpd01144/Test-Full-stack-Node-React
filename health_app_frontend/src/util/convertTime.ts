export const numberToDateTime = (time: number): { time: string; date: string } => {
    const date = new Date(time);
    return {
        time: `${date.getHours() > 9 ? '' : '0'}${date.getHours()}:${
            date.getMilliseconds() > 9 ? '' : '0'
        }${date.getMinutes()}`,
        date: `${date.getFullYear()}.${date.getMonth() > 8 ? '' : '0'}${date.getMonth() + 1}.${
            date.getDate() > 9 ? '' : '0'
        }${date.getDate()}`
    };
};
