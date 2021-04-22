export const random = (num) => Math.ceil(Math.random() * num);
export const currentDate = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
