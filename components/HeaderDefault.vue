<template>
    <b-navbar toggleable="md">
        <div class="container">
            <b-navbar-brand href="/">
                <img class="navbar-logo" src="~/static/logo.png" alt="tiwiti.co">
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <li class="nav-item"><nuxt-link class="nav-link" to="/">Home</nuxt-link></li>
                    <li class="nav-item"><nuxt-link class="nav-link" to="/about">About</nuxt-link></li>
                    <li class="nav-item"><nuxt-link class="nav-link disabled" to="/award">Award Project</nuxt-link></li>
                    <li class="nav-item"><nuxt-link class="nav-link" to="/business">Business</nuxt-link></li>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<style lang="scss">
    .navbar{
        background: #fff;
        padding: 0 0;
        .navbar-brand{
            .navbar-logo{
                max-width: 4.5em;
            }
        }
        .navbar-collapse{
            .navbar-nav{
                .nav-item{
                    a{
                        color: #333;
                        font-family: 'Raleway', 'sans-serif';
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 0.5px;
                        padding: 2.5em 2em 2em 2em;
                        text-transform: uppercase;
                    }
                }
                .nav-item:hover{
                    a{
                        color: #F3A6AF;
                    }
                }
            }
        }
        .navbar-toggler{
            border-color: none;
            padding: 0.25em 0;
        }
    }

    @media screen and (max-width: 440px){
        .navbar{
            padding: 0.7em 1.5em;
            .navbar-collapse{
                .navbar-nav{
                    .nav-item:hover{
                        a{
                            color: #F3A6AF;
                        }
                    }
                }
            }
        }
    }
    
    @media screen and (min-width: 1200px){

    }
</style>

