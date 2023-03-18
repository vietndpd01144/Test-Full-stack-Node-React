export const dateConvert = (dateString: string): { time: string; date: string; dateNoYear: string } => {
    const time = new Date(Date.parse(dateString));

    return {
        time: `${time.getHours() > 9 ? '' : '0'}${time.getHours()}:${
            time.getMilliseconds() > 9 ? '' : '0'
        }${time.getMinutes()}`,
        date: `${time.getFullYear()}.${time.getMonth() > 8 ? '' : '0'}${time.getMonth() + 1}.${
            time.getDate() > 9 ? '' : '0'
        }${time.getDate()}`,
        dateNoYear: `${time.getMonth() > 8 ? '' : '0'}${time.getMonth() + 1}.${
            time.getDate() > 9 ? '' : '0'
        }${time.getDate()}`
    };
};
