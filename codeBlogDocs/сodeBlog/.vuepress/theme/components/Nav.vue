<template>
    <header>
        <nav>
            <a href="/">{{$site.title}}</a>
            <ul>
                <li v-for="item in $site.themeConfig.nav">
                    <a :href="item.link">{{item.text}}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>