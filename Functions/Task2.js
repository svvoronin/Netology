// Task2:

/* Информация об авторизованном пользователе хранится в глобальном объекте user. Вот пример такого объекта: */

let user = {
    name: "Иван Иванов",
    login: "killer504",
    reputation: 97,
    messages: [
      {from: "administrator", text: "Вы получили предупреждение за публикацию рекламы на форуме"},
      {from: "Петр", text: "Собираем встречу в субботу в 19:00. Придёшь?"},
      {from: "administrator", text: "Ваш рейтинг был повышен пользователем DonkeyKong"},
      {from: "administrator", text: "Ваш рейтинг был повышен пользователем Netologist"},
      {from: "Brian Kerninghan", text: "hello, world"}
    ]
};

/* Напишите функцию, которая будет печатать список сообщений для пользователя. */

function user_messages() {
    length_of_messages = user.messages.length
    console.log('Всего сообщений:', length_of_messages)

    for (let i = 0; i < user.messages.length; i++) {
        console.log(user.messages[i].from+' | '+user.messages[i].text)
    }
   
}

user_messages()