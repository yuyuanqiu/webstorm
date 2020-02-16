<template>
    <div>
        <h2>other</h2>
        <footer>
            <address>other</address>
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
      console.log("other: ", this)
      next()
    }
    
}
</script>