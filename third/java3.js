today = new Date();
gradday = new Date("May 25, 2024");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (gradday.getTime() - today.getTime());
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
document.write(daysLeft + " days left until the freedom!");
