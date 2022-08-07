/* Форумы содержат много тем для обсуждения, и нам часто приходится печатать по несколько сообщений из каждой темы. В одной книге вы прочитали, 
что такие частые операции нужно выделять в функции, и решили выделить печать ленты сообщений в теме в отдельную функцию.
На вход функция принимает объект темы thread, а также количество сообщений для печати. */

let thread = {
  title: "Поделитесь книжкой",
  author: "RuBrick",
  total: 23,
  messages: [
    {
      id: 13201,
      date: "2018-01-09",
      text: "Посоветуйте, пожалуйста, с одной стороны подробную, а с другой доступную для понимания книгу по javascript. Спасибо",
      author: {
        name: "RuBrick",
        login: "ru_brick",
        reputation: 3,
        role: "user",
      },
    },
    {
      id: 13208,
      date: "2018-01-12",
      text: "Неужели нет хорошей литературы?",
      author: {
        name: "RuBrick",
        login: "ru_brick",
        reputation: 3,
        role: "user",
      },
    },
    {
      id: 13209,
      date: "2018-01-12",
      text: "в общем, NodeJS это JS + некоторые доп. модули и объекты. Тебе нужна литература по самому JS и дока на официальном сайте.",
      author: {
        name: "Popov",
        login: "popov_ma",
        reputation: 2310,
        role: "user",
      },
    },
    {
      id: 13219,
      date: "2018-01-14",
      text: "В сети много сайтов с хорошими объяснениями + есть курсы.",
      author: {
        name: "Void",
        login: "void",
        reputation: 5005,
        role: "user",
      },
    },
    {
      id: 13220,
      date: "2018-01-14",
      text: "Есть большая книга «JavaScript.Подробное руководство», потом смотришь документацию.",
      author: {
        name: "noname",
        login: "noname",
        reputation: 100,
        role: "user",
      },
    },
    {
      id: 13250,
      date: "2018-01-19",
      text: "Или можно посмотреть видео-курсы на youtube! А самое главное - практика! И этот форум - лучшая тренировочная площадка!",
      author: {
        name: "noname",
        login: "noname",
        reputation: 110,
        role: "user",
      },
    },
    {
      id: 13259,
      date: "2018-01-20",
      text: "Понял, спасибо!",
      author: {
        name: "RuBrick",
        login: "ru_brick",
        reputation: 13,
        role: "user",
      },
    },
  ],
};

function printing(thread_input, message_number) {
  message_array = thread_input.messages.slice(-message_number);

  if (message_array.length == 0) {
    console.log("Ошибка формата! В теме нет сообщений");
  } else {
    for (let i = 0; i < message_array.length; i++) {
      console.log(
        message_array[i].author.name +
          " (репутация: " +
          message_array[i].author.reputation +
          "): " +
          message_array[i].text
      );
    }
  }
}

printing((thread_input = thread), (message_number = 5));
