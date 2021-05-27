<template>
    <modal ref="crearUsuario" titulo="Crear usuario">

    </modal>
</template>

<script>
import $ from 'jquery';

export default {
    components: {
        modal: () => import('../../components/modal.vue')
    },
    methods: {
        toggle(){
            this.$refs.crearUsuario.toggle()
        }
    }
}
</script>

<style lang="css" scoped>
</style>
