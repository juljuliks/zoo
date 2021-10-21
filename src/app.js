const express = require('express');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'secret',
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    expires: new Date('Dec 31, 2021'), // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const getAllCategories = require('./middlewares/getAllCategories.middleware');

const indexRouter = require('./routes/index.router');
const adminsRouter = require('./routes/admins.router');
const categoriesRouter = require('./routes/categories.router');
const tariffsRouter = require('./routes/tariffs.router');
const newsRouter = require('./routes/news.router');
const scheduleRouter = require('./routes/schedule.router');

const chatRouter = require('./routes/chats.router');
const staffRouter = require('./routes/staff.router')

const app = express();
app.use(session(sessionConfig));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
hbs.registerPartials(path.join(process.env.PWD, 'src/views/partials'));

app.use(getAllCategories);

app.use('/', indexRouter);
app.use('/admins', adminsRouter);
app.use('/categories', categoriesRouter);
app.use('/tariffs', tariffsRouter);
app.use('/news', newsRouter);
app.use('/schedule', scheduleRouter);

app.use('/chat', chatRouter);
app.use('/staff', staffRouter)


module.exports = app;
