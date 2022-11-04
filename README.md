![title](https://user-images.githubusercontent.com/61308457/199839161-a4347960-9bdd-4b6f-90b3-b55d8bec2ac3.svg)

<div align="center">
  <img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-202124?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#install">Установка</a>
</h3>
<!--
<h3 align="center">
  <a href="http://stellar-burgers.iv-a.ru/" title="Link">Demo</a> 
  •
  <a href="https://iv-a.github.io/react-burger/">GitHubPages</a>
</h3>
--!>
<h1 id="about">О проекте</h1>
<p>Интерфейс для сайта <a href="https://news.ycombinator.com/news">Hacker News</a></p>


![chrome_AS3cEyD3ow](https://user-images.githubusercontent.com/61308457/199858841-e75434e2-90de-4344-b2e9-dfd747b1b2ce.gif)

<!--
<table>
  <tbody>
    <tr>
      <td>
        <p align="center"><b>Выполнен <br> в рамках курса React-разработки от Яндекс.Практикум. </b><p>
        <p align="center">Проект представляет собой приложение космической бургерной, позволяющее заказывать уникальные бургеры, которые приготовят по индивидуальному заказу. В приложении можно создавать бургеры простым перетаскиванием необходимых ингредиентов, оформлять заказ, а также отслеживать его статус в реальном времени.</p>
      </td>
      <td width="70%"><img src="https://user-images.githubusercontent.com/61308457/168448786-28b07fa6-3e18-407c-a3d5-27571a0001e8.gif"/></td>
    </tr>
  </tbody>
</table>
--!>
<h1 id="techs">Технологии</h1>
<h3>Frontend</h3>
<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>Redux</li>
  <li>Redux Toolkit</li>
  <li>RTKQuery</li>
  <li>React Router</li>
  <li>CSS Modules</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>TypeScript</li>
  <li>Express.js</li>
</ul>

<h1 id="functionality">Функциональность</h1>

<h3>Backend</h3>

<table>
  <thead>
    <tr>
      <th>Метод</th>
      <th width="150px">Маршрут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>GET</code></td>
      <td><code>/posts</code></td>
      <td>возвращает массив <code>id[]</code> последних 100 новостей</td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/post?id={id}</code></td>
      <td>Возвращает объект новостного поста с деревом коментариев, в каждом узле которого содержится информация о количестве дочерних узлов
      </td>
    </tr>
    <tr>
      <td><code>GET</code></td>
      <td><code>/item?id={id}</code></td>
      <td>Возвращает объект по его <code>id</code></td>
    </tr>
  </tbody>
</table>

<h3>Frontend</h3>

#### Главная страница
- [x] Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
- [x] Каждая новость содержит:
  - [x] название
  - [x] рейтинг
  - [x] ник автора
  - [x] дату публикации
- [x] По клику на новость происходит переход на страницу новости
- [x] Список новостей должен автоматически обновляться раз в минуту без участия пользователя
- [x] На странице должна быть кнопка для принудительного обновления списка новостей

#### Страница новости
- [x] Должна содержать:
  - [x] ссылку на новость
  - [x] заголовок новости
  - [x] дату
  - [x] автора
  - [x] счётчик количества комментариев
  - [x] список комментариев в виде дерева
- [x] Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
- [x] На странице должна быть кнопка для принудительного обновления списка комментариев
- [x] На странице должна быть кнопка для возврата к списку новостей

<!--
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
--!>

<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем (например dev):</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>/
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/iv-a/hacker-news.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>hacker-news</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd hacker-news/
</pre>
</li>

<h3>Backend</h3>
<li>
  <p>Переходим в директорию с бэкендом:</p>
<pre>
cd server/
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
yarn install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
yarn start
</pre>
</li>
  
<h3>Frontend</h3>
  
<li>
  <p>Переходим в директорию с фронтендом:</p>
<pre>
cd ../client/
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
yarn install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
yarn start
</pre>
</li>
</ol>
