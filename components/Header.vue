<template>
    <div>
        <header class="header">
            <ul class="nav-items">
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/users">Users</nuxt-link>
                </li>
            </ul>
        </header>
    </div>
</template>

<style scoped>

header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #ccc;
}

.nav-items {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
    
</style>