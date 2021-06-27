export const support = {
    setSessionStorageItem: (name, data) => {
        if (typeof data !== 'string') data = JSON.stringify(data);
        sessionStorage.setItem(name, data);
    },
    killSessionStorageItem: (name) => {
        sessionStorage.removeItem(name);
    },
    getSessionStorageItem: (name) => {
        const item = sessionStorage.getItem(name);
        return item?.charAt(0) === '{' ? JSON.parse(item) : item;
    },
    getPrettyTime: time => `${new Date(Number(time)).toTimeString().substr(0, 8)}`,
};
