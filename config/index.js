const PORT = 8091;
const WECHAT = {
    AppID: 'wx7133a141a07ad68e',
    AppSecret: '5a75ba91019359dfd67ed6389744d9ba',
    Token: '70pJmQ6EfGkNYc9YhXzCi8l8j42K72eE',    
};
const MONGO_HOST = '127.0.0.1';
const MONGO_PORT = 27017;
const MONGO_DB = 'koaMovie';
const MONGODB = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

module.exports = {
    PORT,
    WECHAT,
    MONGODB,
};
