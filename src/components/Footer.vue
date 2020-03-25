<template>
    <footer class="row">
        <nav class="navbar navbar-expand-lg navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'homeLink'}" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'aboutLink'}" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'adminLink'}" class="nav-link">Admin</router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>