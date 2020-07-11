<template>
    <div>
        <h1>hello world</h1>
        <Nav/>
        <Content/>
        <Footer/>
    </div>
</template>
<script>
    import Nav from "@theme/components/Nav";
    import Footer from "@theme/components/Footer";
    export default {
        components: { Nav, Footer },
        name: "Layout"
    };
</script>
<style lang="stylus">
    @import '../styles/main.styl';
</style>