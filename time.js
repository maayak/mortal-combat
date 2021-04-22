const currentDate = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
export default currentDate;