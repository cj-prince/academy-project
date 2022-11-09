<template>
    <section class="main ">
        <div class="">
            <h2>Page not found!</h2>
            <p>Sorry we can't find what you are looking for</p>
            <router-link to="/">
                <button type="button" class="">Try Again</button>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style>
.main{
  display: flex;
  padding: 40px;
}
</style>