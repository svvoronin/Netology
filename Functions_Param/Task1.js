//Task1

/* Напишите функцию, которая умеет возвращать посчитанную репутацию пользователя по формуле: разница лайков и дизлайков, 
которые ставят другие пользователи, умноженная на коэффициент. Коэффициент представляет из себя долю не 
отредактированных сообщений пользователя. Если дизлайков больше, чем лайков, то коэффициент не применяется. 
Если сообщений у пользователя нет, его репутация равна 0. */

function calc_reputation(
  likesNumber,
  dislikesNumber,
  totalMessageNumber,
  editedMessageNumber
) {
  coef = (totalMessageNumber - editedMessageNumber) / totalMessageNumber;
  diff = likesNumber - dislikesNumber;

  if (editedMessageNumber > totalMessageNumber) {
    return "Erorr: Number of edited messages must be less than or equal to the total message number";
  } else if (totalMessageNumber == 0) {
    return 0;
  } else if (dislikesNumber > likesNumber) {
    return diff;
  } else {
    return diff * coef;
  }
}

rep = calc_reputation(
  (likesNumber = 10),
  (dislikesNumber = 5),
  (totalMessageNumber = 40),
  (editedMessageNumber = 30)
);

console.log(rep);
