<template>
    <div>
        <h2>关于</h2>
        <footer>
            <address>南江路21号</address>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Aboutmy',
    created() {
        console.log("Aboutmy is create")
    },
    destroyed() {
        console.log("Aboutmy is destroy")
    },
    beforeRouteLeave (to, from, next) {
      console.log("about: ", this)
      next()
    }
}
</script>