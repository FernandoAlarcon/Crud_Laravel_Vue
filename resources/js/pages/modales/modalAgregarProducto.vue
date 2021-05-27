<template>
    <modal ref="agregarProducto" titulo="Agregar producto" tamano="modal-lg">
        <div class="row mx-0 my-3">
        
            <div class="col-5">
               
                <label>Bodega</label>
                

                <el-select v-model="idBodega" placeholder="Select" class="w-100">
                    <el-option      
                    v-for="bodegaIn in bodegasData"
                    v-if="bodegaIn.EstadoBodegas === 1"
                    :label="bodegaIn.nombre"
                    :value="bodegaIn.BodegaId"

                       />
                </el-select>
            </div>
            <div class="col-5">
                <label>Producto</label>
                <el-select      
                    v-model="idProducto"
                    placeholder = "Select"
                    class       = "w-100"
                    >

                    <el-option
                    v-for="productIn in productsData"  

                    v-if="productIn.estado === 1"
                    :label="productIn.nombre"
                    :value="productIn.id"
                     />
                </el-select>
            </div>
            <div class="col-2">
                <label>Cantidad</label>
                <input 
                  v-model.number="cantidad"
                  type  = "number"
                  class = "form-control"
                  name  = "" 
                  value = ""
                />
                <br><br>

                <input 
                  v-on:click.prevent="AddInventario()"
                  type  = "button"
                  class = "btn btn-danger"
                  name  = "" 
                  value = "Guardar"
                />

                 
                
            </div>
            
        </div>
    </modal>
</template>

<script>

    //const axios = require('axios');
import $ from 'jquery';

export default {
    
    created: function(){
        this.getProducts(),
        this.getBodegas()
    },
    components: {
        modal: () => import('../../components/modal.vue')
    },
    data(){
        return {
           
            value: '',
            productsData: '',
            bodegasData:'',
            idProducto:'',
            idBodega:'',
            cantidad:0,
            respons:'',
            DataInventary: {'id_bodega': '', 'cantidad': '','id_producto':''}
        }
    },
    computed: {
     total: function () {
       return Number(this.cantidad);
     }
    },
    methods: {
        toggle(){
            this.$refs.agregarProducto.toggle(),
            this.getProducts(),
            this.getBodegas()
        },
        getProducts: function () {

                    //this.productsData = '';
                    var urlProducts = 'api/products';
                    axios.get(urlProducts).then(
                    response=>{
                        this.productsData = response.data.tasks.data
                    });

        },
        getBodegas: function () {
                    //this.bodegasData = '';
                    var urlProducts = 'api/bodegas';
                    axios.get(urlProducts).then(
                    response=>{
                        this.bodegasData = response.data.Data.data
                    });
                     
        }, 
        AddInventario: function(){
             var url = '/inventario';
              
                
                this.DataInventary.cantidad    = this.cantidad;
                this.DataInventary.id_bodega   = this.idBodega;
                this.DataInventary.id_producto = this.idProducto;
                 
               

                axios.post(url, {
                            cantidad    : this.cantidad,
                            id_bodega   : this.idBodega,
                            id_producto : this.idProducto

                        }).then(response => {
                    
                            this.respons = response.data.Config

                        }).catch(error => {
                            this.errors = error.response.data
                        }); 

                this.Review();
        },
        Review: function(){

                this.$refs.agregarProducto.toggle();
                this.getBodegas();
                this.cantidad    = 0;
                this.idBodega    = '';
                this.idProducto  = ''; 
                this.errors      = [];
                console.log('has come ', this.respons);
                if(this.respons === 'error-data'){
                    alert('Possible Error');
                    this.respons = '';
                }else{
                    alert('Successfull');
                    this.respons = '';  
                } 

        }
    }
}
</script>

<style lang="css" scoped>
</style>
