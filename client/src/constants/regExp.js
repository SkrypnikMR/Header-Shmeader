export const regExp = {
    emailRegExp: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
    passwordRegExp: /^[a-z0-9]{6,25}/i,
    firstNameRegExp: /[a-zа-я]{2,30}/i,
    lastNameRegExp: /[a-zа-я]{2,30}/i,
};
