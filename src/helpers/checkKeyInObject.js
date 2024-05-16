const checkKeyInObject = (obj, key) => {
    if (obj.hasOwnProperty(key)) {
        return true;
    } else {
        return false;
    }
};

export { checkKeyInObject };
