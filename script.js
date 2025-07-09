const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user;

document.getElementById("user-info").innerText = `
Hello ${user.first_name} (@${user.username || "no username"})!
Your Telegram ID: ${user.id}
`;

tg.expand(); // باز کردن اپ به حالت تمام‌صفحه
