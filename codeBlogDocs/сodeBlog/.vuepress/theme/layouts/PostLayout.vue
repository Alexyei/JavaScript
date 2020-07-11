<template>
    <div>
        <Nav/>
        <h1>Заметка</h1>
<!--        Загрузка содержимого файла .md-->
        <Content/>
<!--        <label class="text-grey-dark">{{formateDate($page.frontmatter.date)}}</label>-->
        <Footer/>
    </div>
</template>
<script>
    // import moment from "@node_modules/moment"
    import Nav from "@theme/components/Nav"
    import Footer from "@theme/components/Footer"
    export default {
        components: { Nav, Footer },
        name: "Layout",
        // methods: {
        //     formateDate(date) {
        //         return moment(date).format("MMM Do YYYY");
        //     },
        // },
    };
</script>
<style lang="stylus">
    @import '../styles/post.styl';
</style>