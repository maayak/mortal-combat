class Utils {
    random = (num) => Math.ceil(Math.random() * num);
    currentDate = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export default Utils;
