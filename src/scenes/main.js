const Scene = require('telegraf/scenes/base');
const fs = require('fs')
const path = require('path')
const axios = require('axios')


module.exports = (bot, I18n) => {
    const mainScene = new Scene('mainMenu');

    mainScene.enter(async (ctx) => {

        let message = ctx.i18n.t('greeting', {
            ctx: ctx
        })

        const authMsg = [
            [`${ctx.i18n.t('mainMenuHelp')}`],
            [`${ctx.i18n.t('mainMenuCreateAnnouncement')}`],
            [`${ctx.i18n.t('mainMenuFeedback')}`, `${ctx.i18n.t('mainMenuFindAnnouncement')}`],
            [`${ctx.i18n.t('mainMenuPersonalCabinet')}`, `${ctx.i18n.t('mainMenuSearch')}`],
            [`${ctx.i18n.t('mainMenuFavorites')}`, `${ctx.i18n.t('mainMenuHeadings')}`],
        ]

        if (ctx.scene.state.start) {
            message = ctx.scene.state.start
        }

        const msg = bot.telegram.sendMessage(ctx.chat.id, message, {
            parse_mode: 'HTML',
            reply_markup: {
                keyboard: authMsg,
                resize_keyboard: true,
                one_time_keyboard: true
            }
        })


        ctx.session.mesage_filter.push((await msg).message_id);
    })


    mainScene.hears(I18n.match('mainMenuHelp'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuHelp')}`);
    })

    mainScene.hears(I18n.match('mainMenuCreateAnnouncement'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuCreateAnnouncement')}`);
    })

    mainScene.hears(I18n.match('mainMenuFeedback'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuFeedback')}`);
    })

    mainScene.hears(I18n.match('mainMenuFindAnnouncement'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuFindAnnouncement')}`);
    })

    mainScene.hears(I18n.match('mainMenuPersonalCabinet'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuPersonalCabinet')}`);
    })

    mainScene.hears(I18n.match('mainMenuSearch'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuSearch')}`);
    })

    mainScene.hears(I18n.match('mainMenuFavorites'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuFavorites')}`);
    })

    mainScene.hears(I18n.match('mainMenuHeadings'), ctx => {
        // ctx.scene.enter('printing')
        ctx.reply(`${ctx.i18n.t('mainMenuHeadings')}`);
    })


    mainScene.hears(I18n.match('mainMenuBack'), ctx => {
        ctx.scene.enter('mainMenu', {
            start: ctx.i18n.t('mainMenu')
        })
    })

    return mainScene;
}
