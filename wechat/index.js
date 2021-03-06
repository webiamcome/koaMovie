const WeChat = require('../wechat-lib');
const WeChatOAuth = require('../wechat-lib/oauth');
const Config = require('../config');
const Mongoose = require('mongoose');

const Token = Mongoose.model('Token');
const Ticket = Mongoose.model('Ticket');

const WeChatConfig = {
    weChat: {
        appID: Config.WECHAT.AppID,
        appSecret: Config.WECHAT.AppSecret,
        token: Config.WECHAT.Token,
        async getAccessToken(){
            const Res = await Token.getAccessToken();
            return Res;
        },
        async saveAccessToken(data){
            const Res = await Token.saveAccessToken(data);
            return Res;
        },
        async getTicket(){
            const Res = await Ticket.getTicket();
            return Res;
        },
        async saveTicket(data){
            const Res = await Ticket.saveTicket(data);
            return Res;
        },        
    },
};

exports.getWeChat = () => new WeChat(WeChatConfig.weChat);
exports.getWeChatOAuth = () => new WeChatOAuth(WeChatConfig.weChat);