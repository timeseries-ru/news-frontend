# news-frontend
Наброски фронтенда для проекта news.

## TODO


1. Разные (какие нужны) **типы параметров** и их передача на backend.
2. Поиск - неизвестно что там, поэтому неизвестно как делать.

## Install/Run

```
git clone .../this/repo target_folder
cd target_folder
npm install
npm run dev
```

Production-версия согласно инструкциям nuxt. По умолчанию режим SSR.
Если надо сменить на SPA, надо вписать `mode: 'spa'` в `nuxt.config.js`.

## Формат JSON запросов/ответов

Endpoint задается в файле `~/api/backend.js`. Сейчас endpoint не подключен,
используются фэйковые данные, переменная `useFakes = true` (убрать если надо).

Фронтенд ждет от бэкэнда по url `endpoint/layout` (GET) следующий JSON-ответ:

```
[{
  "tabName": "Название вкладки на главной, по порядку",
  "controls": [{
      "text": "Подпись элемента управления для фильтра в правом меню",
      "name": "Имя параметра, которое будет передаваться в backend (пока нет)",
      "type": "Тип параметра, сейчас доступно только 'date'"
    }, {...}],
    "widgets": [{
      "spec": "собственно vega spec",
      "width": "Одно или несколько названий классов из системы сетки vuetify, например 'xs12 lg6' или 'xs12'"
    }, {...}]
}, {...}]
```

Если в `widget` будет задано `text` вместо `spec`, то будет текстовая карточка.

Для блога и постов по url `endpoint/posts` ожидается (GET) следующий JSON:

```
[{
  {
    "title": "Заголовок поста",
    "description": "Предварительное описание поста для списка постов",
    "image": "https://picsum.photos/300/300?image=1",
    "id": 1
  }
}, {...}]
```

Для конкретного поста по url `endpoint/post/12345`, где 12345 - id поста, по GET нужен JSON-ответ

```
{
  "content": "Markdown контента поста"
}
```

## Если нужно поправить About

В файле `~/pages/about.vue` в данных компоненты задается markdown-строка.
