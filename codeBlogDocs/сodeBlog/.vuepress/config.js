module.exports = {
    locales: {
        '/': {
            lang: 'ru',
            title: 'Кодовый конспект1',
            description: 'Блог по программированию и IT',
        }

    },
    themeConfig: {
            nav: [
                {text: 'Главная', link: '/'},
                {text: 'Заметки', link: '/public/notes/'},
                {text: 'Мои проекты', link: '/public/myProjects/'},
                {text: 'Обо мне', link: '/public/aboutMe/'}
            ]
    }
}