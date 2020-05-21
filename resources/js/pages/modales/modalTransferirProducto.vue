<template>
    <modal ref="TransferirProducto" titulo="Agregar producto" tamano="modal-lg">
        <div class="row mx-0 my-3">
            <div class="col-6">
                <label>Bodega origen</label>
                <el-select 
                    v-model="BodegaSalida"
                    placeholder="Select"
                    class="w-100"
                    @change="getProductosDisponibles"
                    >
                    <el-option

                    v-for="item in bodegasData"
                    v-if="item.EstadoBodegas === 1  && item.BodegaId != BodegaDestino"
                    :label="item.nombre"
                    :value="item.BodegaId"
                    />
                </el-select>
            </div>
            <div class="col-6">
                <label>Bodega destino</label>
                <el-select v-model="BodegaDestino" placeholder="Select" class="w-100">
                    <el-option

                    v-for="bodegaIn in bodegasData"
                    v-if="bodegaIn.EstadoBodegas === 1 && bodegaIn.BodegaId != BodegaSalida"
                    :label="bodegaIn.nombre"
                    :value="bodegaIn.BodegaId"
                    />
                </el-select> 
            </div>
        </div>
        <div class="row mx-0 my-3">
            <div class="col-6">
                <label>Producto</label>
                <el-select v-model="DataComplete" placeholder="Select" class="w-100" v-on:change="getCantidadDinamic() ">
                    <el-option
                    v-for="item in InventariosData"
                    :key="item.inventariosItem"
                    :label="item.NombreProducto"
                    :value="[item.inventariosItem,
                             item.cantidad,
                             item.IdProducto]"
                    
                    />
                </el-select>
            </div>
            <div class="col-2">
                <label>Cantidad</label><br>
                <label>Max {{this.max}} </label>
                <input 
                      type       = "number"
                      v-model    = "CantidadTotal"
                      v-on:keyup = "getCapacidad()"
                      :max       = 'CantidadMovil'
                      :data-num  = 'CantidadMovil'
                      class      = "form-control"
                      name       = "" 
                      value      = "" />
            </div>
            <div class="col-2">
                
                <button class="btn btn-danger" v-on:click="CreateTraspaso()" >
                    Enviar
                </button>
            </div>

        </div>
    </modal>
</template>

<script>
    
    const axios = require('axios');

export default {
        
    created: function(){
        //this.getProducts(),
        this.getBodegas()
    },
    components: {
        modal: () => import('~/components/modal')
    },
    data(){
        return {
             
            errors: [],
            value: 0,
            max:'',
            bodegasData: '',
            BodegaSalida:'',
            BodegaDestino: '',
            InventariosData: '',
            CantidadMovil:'',
            CantidadTotal:0,
            DataTransfers:{ 'id_bodega_origen':'', 'id_bodega_destino':'', 'id_inventario':'', 'cantidad':'', 'sobrante':'', 'id_producto':'' },
            DataComplete:[],
        }
    },
    methods: {

        CreateTraspaso: function(){ 
             
            if(this.BodegaSalida === '' ||  this.BodegaDestino === '' ){

                alert('Tiene Campos Vacios');

            }else if(this.value === 0 ){

                alert('Seleccione Producto');
            
            }else if(this.CantidadTotal === 0){

                alert('Ingrese Cantidad');

            }else{

                if(confirm('Estas seguro de que deseas hacer el traspaso')){

                var urlUpdate = '/inventario_update';
                this.DataComplete[1] = parseInt(this.DataComplete[1]); 
                this.CantidadTotal   = parseInt(this.CantidadTotal);

                var sobrante  = this.DataComplete[1] - this.CantidadTotal;

                this.DataTransfers.id_bodega_origen  = this.BodegaSalida;
                this.DataTransfers.id_bodega_destino = this.BodegaDestino;
                this.DataTransfers.id_inventario     = this.DataComplete[0];
                this.DataTransfers.cantidad          = this.CantidadTotal;
                this.DataTransfers.sobrante          = sobrante;
                this.DataTransfers.id_producto       = this.DataComplete[2];

                //console.log('esto se va ', this.DataTransfers);

                axios.get( urlUpdate, 
                        {params: {

                            id_bodega_origen  : this.DataTransfers.id_bodega_origen,
                            id_bodega_destino : this.DataTransfers.id_bodega_destino,
                            id_inventario     : this.DataTransfers.id_inventario,
                            cantidad          : this.DataTransfers.cantidad,
                            sobrante          : this.DataTransfers.sobrante,
                            id_producto       : this.DataTransfers.id_producto

                        }}).then(response=>{
                        
                        this.BodegaSalida  = '';
                        this.BodegaDestino = '';
                        this.CantidadTotal = 0;
                        this.DataComplete  = [];
                        this.value         = 0;
                        this.UpdateState   = {
                                    'id_bodega_origen'  :'',
                                    'id_bodega_destino' :'',
                                    'id_inventario'     :'',
                                    'cantidad'          :'',
                                    'sobrante'          :'',
                                    'id_producto'       :''
                                    };

                        this.errors = [];
                        alert('Transferencia echa');
                        this.$refs.TransferirProducto.toggle();

                }).catch(error =>{
                        this.errors = 'Corrija para poder editar con éxito'
                });

             }

            }/// FINAL ELSE VERIFICATION
        },
        getCapacidad: function(){

            if(this.CantidadTotal != 0){

                var cap             = event.target.getAttribute('data-num');
                cap                 = parseInt(cap);
                this.CantidadTotal  = parseInt(this.CantidadTotal);
               
                if(this.CantidadTotal>cap){
                    this.CantidadTotal = cap;
                }

            }///END

            
        },
        getCantidadDinamic: function(info){
                    //console.log('llego a dinamic ',this.DataComplete);
                    this.value = 1;
                    this.CantidadTotal = 0;
                    this.CantidadMovil = this.DataComplete[1]; 
                    this.max           = this.CantidadMovil;
        },
        getBodegas: function () {

                    var UrlBodegas = '/bodegas';
                    axios.get(UrlBodegas).then(
                    response=>{
                        this.bodegasData = response.data.Data.data
                    });
                     
        },
        getProductosDisponibles: function(){
                    var urlInventarios = '/inventario_data';
                    axios.get(urlInventarios,{params: {idBodega: this.BodegaSalida}}).then(
                    response=>{
                        this.InventariosData = response.data.inventarios.data
                    });
                    console.log('this come ',this.InventariosData);
        },      
        toggle(){
            this.$refs.TransferirProducto.toggle()
        }
    }
}
</script>

<style lang="css" scoped>
</style>
