<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-4">
                    <b-navbar type="dark" variant="dark">
                        <b-navbar-nav>
                            <b-nav-item to="/admin">Orders</b-nav-item>
                            <b-nav-item to="/admin/menu">Menu</b-nav-item>
                            <b-nav-item to="/admin/messages">Messages</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar>
                </div>
            </div>
        </div>
       <router-view class="mt-5"></router-view>
    </section>
</template>

<script>
    export default {
        name: "Admin",
        async mounted() {
            if (this.$store.state.userLogged.profile!=="admin"){
                this.$swal("Access denied", "You are not allowed stay here", "error")
                this.$router.push("/login")
            }
        }
    }
</script>