# Emails input

Выбран mvc для наглядности и масштабируемости.

#### Установка

/dist/bundle.js - js билеотека

```
<script src="bundle.js"></script>

```

#### Использование

EmailsInput.default(conteiner, arrayOfEmails) - класс компонента

conteiner - родительский элемент типа Element, где будет рендереться компонент.
arrayOfEmails - строковый массив, список емэйлов.

```
<script>
    const body = document.querySelector("body");
    let arrayOfEmails = [`mail1@gmail.com`, `mail2@mail.com`];
    const emailsInput = new EmailsInput.default(body, arrayOfEmails);
    emailsInput.render();
</script>

```

#### Сборка компонента

```
npm i

npm run build

```

#### 4. Demo

<a href="https://htmlacademy.ru/intensive/react">Demo</a>
