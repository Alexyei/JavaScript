<template>
    <div>
        <h1>Список постов</h1>
        <ul>
            <li v-for="post in posts">
                <router-link :to="post.path">{{ post.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import Nav from "@theme/components/Nav";
    import Footer from "@theme/components/Footer";
    export default {
        components: { Nav, Footer },
        name: "Layout",
        computed: {
            posts() {
                return this.$site.pages
                    .filter(x => x.path.startsWith("/public/notes/") && !x.frontmatter.blog_index)
                    .sort(
                        (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
                    )
            },
        },
    };
</script>