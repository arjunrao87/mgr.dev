<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">mgr.dev</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
                <li class="nav-item">
                    <a href="https://www.google.com"><p class="submit-area">Submit</p></a>
                </li>
            </ul>
        </div>
        <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div> -->
        <!-- <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link class="nav-link collapse navbar-collapse" to="/links">Links</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link collapse navbar-collapse" to="/books">Books</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link collapse navbar-collapse" to="/podcasts">Podcasts</router-link>
            </li>
        </ul> -->
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    .submit-area{
        color: slategray
    }
</style>