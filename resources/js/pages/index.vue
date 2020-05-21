<template>
    <section id="movie" class="conf-section m-3 p-3">
        <div class="row mx-0">
            <div class="col-xl-4 px-0">
                <!-- bodegas -->
                <h1>Ejemplo aqui</h1>
                <div class="border-dark p-2 br-5 my-2 ">
                    <div class="row-12" >
                        <div class="row" >
                            <div class="col-md-4" >
                                <input v-model="bodegasD"  type="text" id="message1" class="form-control" placeholder="Palabra de ayuda" v-on:keyup="getKeyBodegas()"
                            </div>
                        </div>
                    </div>
                    <div class="row-12 grandt-div" >
                         
                        <div class="row mx-0 pl-2">
                            <b class="mr-2 my-auto">Bodegas</b>
                            <el-popover placement="bottom"  title="Crear bodega" width="240" trigger="click"  >

                                <form method="POST" v-on:submit.prevent="createBodega" >

                                    <div class="row mx-0 my-2">
                                        <div class="col">
                                            <label>Nombre Bodega</label>
                                            <input 
                                             type    = "text"
                                             class   = "form-control"
                                             v-model = "newNameBodega" 
                                             value   = "" />
                                        </div>
                                    </div>

                                    <div class="row mx-0 my-2">
                                        <div class="col">
                                            <label>Responsable</label>
                                            <el-select
                                            v-model="newUserBodega"
                                            placeholder="Select"> 

                                            <el-option v-for="userB in usersB"
                                             v-if="userB.estado === 1 "
                                             :key="userB.nombre" :label="userB.nombre" :value="userB.id" /> 
                                            </el-select>

                                            </div>
                                    </div>
                                   
                                <div class="row mx-0 mt-2 justify-content-end">
                                    <button type="button" class="btn btn-sm btn-light mr-2" name="button">Cerrar</button>
                                    <button type="submit" class="btn btn-sm btn-primary" name="button">Guardar</button>
                                </div>

                                </form> 
                                <i slot="reference" class="mdi mdi-plus-circle f-22 cr-pointer" />
                            </el-popover>
                        </div>
                        <div >
                              
                                <div class="row mx-0 my-3">
                                  <table class="table">
                                    <tbody>
                                    <tr  v-for="bodega of bodegas" >
                                     
                                     <td>
                                        <p class="mx-12 my-auto"> 
                                         {{bodega.nombre}} 
                                        </p>
                                     </td>

                                     <td>
                                        <el-tooltip 
                                            class="item" 
                                            effect="light" 
                                            :content='bodega.Username' 
                                            placement="top">

                                            <img 
                                                :src='bodega.foto' @error='imageUrlUser'

                                                class   = "img-dt rounded-circle mx-2 obj-cover"
                                                height  = "40"
                                                width   = "40"
                                                alt     = "" 
                                            
                                            />

                                        </el-tooltip>
                                     </td>
                                     <td>
                                         

                                        <button
                                        type="button" 
                                        v-if="bodega.EstadoBodegas === 0 " 
                                        class="btn btn-danger" 
                                        v-on:click.prevent="updateBodegaState(bodega)" 
                                        name="button">

                                            Desactivado
                                        </button>

                                        <button 
                                        type="button" 
                                        v-if="bodega.EstadoBodegas === 1 " 
                                        class="btn btn-success" 
                                        v-on:click.prevent="updateBodegaState(bodega)" 
                                        name="button">
                                            Activado
                                        </button>

                                     </td>
                                
                                    </tr>
                                    </tbody>
                                   </table>
                                </div>
                            

                        </div>
                         
                    </div>
                </div>

                <!-- usuarios -->

                <div class="border-dark p-2 br-5 my-2  ">
                    <div class="row mx-0 justify-conent-center pl-2">
                        <b class="mr-2 my-auto">Usuarios</b>
                        <!--i class="mdi mdi-plus-circle f-22 cr-pointer" /-->
                    </div>
                    <div   class="row mx-0 my-3 px-2 grandt-div">

                    <table class="table table-hover table-striped" >
                       <tbody>
                        <tr v-for="data in usersData" >

                        <td>

                       <button type="button" v-if="data.estado === 0 " 
                        class="btn btn-danger" v-on:click.prevent="updateUser(data)" name="button">
                        Desactivado
                       </button>
                       <button type="button" v-if="data.estado === 1 " 
                        class="btn btn-success" v-on:click.prevent="updateUser(data)" name="button">
                        Activado
                       </button>

                        

                        <td>
                            
                            {{data.nombre}}
                        </td>

                        </tr>
                       </tbody>
                    </table>

                    </div>
                </div>
                <!-- fin usuarios -->

                <!-- Productos -->

                <div class="border-dark p-2 br-5 my-2">
                    
                     <!-- div>
                     <el-popover
                             ref="popovertrigger"
                             trigger="click"
                             popper-class="popover popover-primary"
                             placement="top">
                         <h3 class="popover-header">
                             Nuevo Producto
                         </h3>

                        <div class="popover-body">
                             Para agregar producto es en la parte de abajo
                            
                        </div>

                      </el-popover>

                      <button class="btn btn-primary" v-popover:popovertrigger id="dataPN" type="danger">
                        Productos 
                        <i slot="reference" class="mdi mdi-plus-circle f-22 cr-pointer" />
                      </button>
                    </div --> 

                    <div  class="row mx-0 my-3 grandt-div-2">
                      <div  >

                        <table class="table " >
                            
                         <tbody> 
                            <tr v-for="dataP in productsData"  >

                            <td>
                                <p class="mx-2 my-auto">{{dataP.nombre}}</p>
                            </td>
                            <td>
                                <p class="mx-2 my-auto">{{dataP.descripcion}}</p>
                            </td>
                            <td>
                               <button 
                                type="button" :class="`btn btn-sm ${dataP.estado?'btn-success':'btn-danger'}`" 
                                name="button" 
                                v-on:click.prevent="updateProducts(dataP)"
                                @click="dataP.estado=!dataP.estado" >
                                {{dataP.estado?'Activo':'Inactivo'}}

                                </button>  
                            </td>
                           

                            </tr>

                            
                         </tbody>

                        </table>
                      </div>
                    </div>
                </div>

                <!-- Fin Productos -->
            </div>
            <!-- tablas -->
            <div class="col-xl-8">
                <div class="row mx-0 my-3">
                    <div class="col d-flex">
                        <label class="mr-2">Rojo</label>
                        <div class="custom-control custom-switch">

                            <input  type  = "checkbox"  class = "custom-control-input" id="ColorTabla"   v-on:click.prevent="ChangueStyles()"  v-model="value" /> 

                            <label class="custom-control-label" for="ColorTabla">Azul</label>
                        </div>
                    </div>

                     

                    <button type="button" class="btn btn-success my-auto btn-sm d-flex" name="button" @click="agregarProducto">
                        <span class="my-auto">Agregar producto</span>
                        <i class="mdi mdi-plus-box cr-pointer f-17 ml-2 my-n1" />
                    </button>
                    <button type="button" class="btn btn-primary ml-2 my-auto btn-sm d-flex" name="button" @click="trasnferirProducto">
                        <span class="my-auto">Transferir producto</span>
                        <i class="mdi mdi-reload f-17 ml-2 my-n1" />
                    </button>
                </div>

                <div class="row mx-0 my-3">
                    <div class="col overflow-auto">
                        <p class="f-600 my-2 text-center f-18">
                            Productos en bodega nueva
                        </p>
                        

                        <div class="form-group">
                            <input v-model="dataInv"  type="text" id="message2" class="form-control" placeholder="write here" v-on:keyup="getKey()"    >
                        </div>
                       
                        <div id="inputs" v-bind:style="bgc_table" class="grandt-div" >
                       


                        <table  id="listado_por_legal" class="table table-sm table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th class="align-middle">Item </th>
                                    <th class="align-middle">Bodega</th>
                                    <th class="align-middle">Producto</th>
                                    <th class="align-middle">Cantidad</th>
                                    <th class="align-middle text-center">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                 <tr v-for="inventario of inventarios" >

                                    <td> {{inventario.inventariosItem}} </td>
                                    <td> {{inventario.nombreBodega}}   </td>
                                    <td> {{inventario.NombreProducto}} </td>
                                    <td> {{inventario.cantidad}}       </td>
                                    <td> {{inventario.FechaCreacion}}  </td>
   
                                  </tr>
                            </tbody>
                        </table>

                        </div>
                    </div>
                </div>
                <!-- HISTORIAL MADE DEV -->
                <div class="row mx-0 my-3"><br><br><br>
                    <div class="col overflow-auto">
                        <p class="f-600 my-2 text-center f-18">Historial de movimientos</p>
                       
                        <div class="form-group">
                                <input v-model="Infohistorial"  type="text" id="message2" class="form-control" placeholder="write here" v-on:keyup="getHistorial()"    >
                        </div>



                        <div id="inputs"class="grandt-div" >
                       


                            <table  id="listado_por_legal" class="table table-sm table-hover table-striped ">
                                <thead>
                                    <tr>
                                        <th class="align-middle">Producto </th>
                                        <th class="align-middle">Bodega Origen</th>
                                        <th class="align-middle">Bodega Destino</th>
                                        <th class="align-middle">Cantidad</th>
                                        <th class="align-middle text-center">Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr v-for="historial of historiales" >
     
                                        <td> {{historial.Producto}}        </td>
                                        <td> {{historial.Origen}}          </td>
                                        <td> {{historial.Destino}}         </td>
                                        <td> {{historial.cantidad}}        </td>
                                        <td> {{historial.FechaCreacion}}   </td>
       
                                      </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>    
                </div>
            </div>
        </div>

        <modal-agregar-producto ref="modalAgregarProducto" />
        <modal-transferir-producto ref="modalTransferirProducto" />
        <modal ref="cambiarEstado" titulo="Cambiar estado usuario">
            <div class="row mx-0 my-3 justify-content-center">
                ¿Está seguro de Activar/Desactivar este usuario?
            </div>
            <div class="row mx-0 mt-2 justify-content-end bg-whitesmoke py-2">
                <button type="button" class="btn btn-sm btn-secondary mr-2" name="button">Cerrar</button>
                <button type="button" class="btn btn-sm btn-primary" name="button">Guardar</button>
            </div>
        </modal>
        <!-- https://datatables.net/manual/ -->
        <!-- https://element.eleme.io/#/es -->
    </section>
</template>

<script>

$(".img-dt").on("error",function(){this.src="img/usuarios/user.jpg"});

const axios = require('axios');


export default {
    

    
    created: function () { 
            this.getProducts();
            this.getProductsD();
            this.getBodegas();
            this.getUsersB();
            this.getUsersD();
            this.getInventario();
            this.ChangueStyles();
            this.getHistorial();
    },
    components: {
        modalAgregarProducto: () => import('./modales/modalAgregarProducto'),
        modalTransferirProducto: () => import('./modales/modalTransferirProducto'),
        modal: () => import('~/components/modal')
        
    },
    data(){return {
        
        Infohistorial:'',
        historiales: [],
        message:'',
        dataInv: '',
        bodegasD:'',
        newNameBodega:'',
        newUserBodega:'',
        UpdateStateBodega: {'id_Bodega': '', 'Estados': ''},
        UpdateStateProduct: {'id_Bodega': '', 'Estados': ''},
        Stateusuario:  {'id_usuario': '', 'Estados': ''},
        bodegas: [],
        products: [],
        productsData: [],
        usersB:[],
        usersData:[],
        inventarios: [],
        respBodega: false,
        errors: '',
        product: false,
        colorTabla: 0,
        value: '',
        tabla_empresa:'',
        modals: {
            notice: false
        },
        NombreProducto:'',
        BodegasNew:'',
        ProductosNew:'',
        checked_color:'',
        ColorChangue:'#EFA1A1',
        bgc_table:{
            backgroundColor:'#EFA1A1'
        },
    } },
    mounted(){
        //this.initDatatables();
    },
    methods: {



        imageUrlUser(event) {
            event.target.src = "/img/usuarios/default.png"
        },    
        ChangueStyles: function(){

            var color1 = '#EFA1A1';
            var color2 = '#74C0F6';

            if(this.checked_color === color1){
                this.checked_color = color2;
            }else{
                this.checked_color = color1;
            }

            this.bgc_table = {
              backgroundColor: this.checked_color
            }

        },
        createBodega: function () {
                var url = '/bodegas';
                axios.post(url, {
                        nombre: this.newNameBodega,
                        id_responsable: this.newUserBodega,
                        estado: 0
                }).then(response => {
                        this.getBodegas();
                        this.newNameBodega   = '';
                        this.newUserBodega   = '';
                        this.errors          = []; 
                        //toastr.success('Producto Agregado');
                }).catch(error => {
                    this.errors = error.response.data
                });
        },

        updateUser: function (usuario) {

            if (confirm('¿ Desear Actualizar el estado de ' + usuario.nombre+' ?')) {
                    var urlUpdateUser = `Users/${usuario.id}`;

                    if (usuario.estado === 0 ) {
                        this.Stateusuario.id_usuario = usuario.id;
                        this.Stateusuario.Estados = 1; 

                        var state = '1';
                         
                    }else {
                        this.Stateusuario.id_usuario = usuario.id;
                        this.Stateusuario.Estados = 0; 

                        var state = '0';
                    } 
 
                    axios.put( urlUpdateUser, this.Stateusuario ).then(
                    response=>{
                        //this.pagination.current_page;

                        this.getUsersD();
                        this.getUsersB();

                        this.Stateusuario = {'id_usuario': '', 'Estados': ''};
                        this.errors = [];
                        //toastr.success('State Update Correctly');

                    }).catch(error =>{
                        this.errors = 'Corrija para poder editar con éxito';
                    });
                }
                    

        },

        updateBodegaState: function (bodega) {

            if (confirm('¿ Desear Actualizar el estado de ' + bodega.nombre+' ?')) {
                    var urlUpdate = `bodegas/${bodega.BodegaId}`;

                    if (bodega.EstadoBodegas === 0 ) {
                        this.UpdateStateBodega.id_Bodega = bodega.BodegaId;
                        this.UpdateStateBodega.Estados = 1; 

                        var state = '1';
                         
                    }else {
                        this.UpdateStateBodega.id_Bodega = bodega.BodegaId;
                        this.UpdateStateBodega.Estados = 0; 

                        var state = '0';
                    } 
 

                    axios.put( urlUpdate, this.UpdateStateBodega ).then(
                    response=>{
                        //this.pagination.current_page;

                        this.getBodegas();
                        this.UpdateStateBodega = {'id_Bodega': '', 'Estados': ''};
                        this.errors = [];
                        //toastr.success('State Update Correctly');

                    }).catch(error =>{
                        this.errors = 'Corrija para poder editar con éxito';
                    });
                }
                    

        },
        getHistorial(){
             if (this.Infohistorial.length > 2) { 

                    var urlHistorials = '/historials';
                    axios.get(urlHistorials,{params: {dataInfo: this.Infohistorial}}).then(response=>{
                        this.historiales = response.data.inventarios.data
                    });

                     
                }else{
                    var urlHistorials = '/historials';
                    axios.get(urlHistorials).then(
                    response=>{
                        this.historiales = response.data.inventarios.data
                    });

                } 
        },
        getKeyBodegas(){
           this.getBodegas();
        },
        getKey() { 
           
            let text1 = this.message;
            this.getInventario();

        },
        getInventario: function (page) {

                if (this.dataInv.length > 2) { 

                    var urlInventario = '/inventario';
                    axios.get(urlInventario,{params: {dataInfo: this.dataInv}}).then(response=>{
                        this.inventarios = response.data.inventarios.data
                    });

                     
                }else{
                    var urlInventario = '/inventario';
                    axios.get(urlInventario).then(
                    response=>{
                        this.inventarios = response.data.inventarios.data
                    });

                } 
                 
        },
        getProducts: function (page) {

                if (this.message.length > 2) { 

                    var urlProducts = '/products';
                    axios.get(urlProducts,{params: {message: this.message}}).then(response=>{
                        this.products = response.data.tasks.data
                    });

                     
                }else{
                    var urlProducts = '/products';
                    axios.get(urlProducts).then(
                    response=>{
                        this.products = response.data.tasks.data
                    });

                     
                } 

        },
        getProductsD: function (page) {

                    var urlProducts = '/products';
                    axios.get(urlProducts).then(
                    response=>{
                        this.productsData = response.data.tasks.data
                    });

        },
        getBodegas: function (page) {

                if (this.bodegasD.length > 1) {  

                    var urlProducts = '/bodegas';
                    axios.get(urlProducts,{params: {bodegasD: this.bodegasD}}).then(response=>{
                        this.bodegas = response.data.Data.data
                    });
 
                }else{
                    var urlProducts = '/bodegas';
                    axios.get(urlProducts).then(
                    response=>{
                        this.bodegas = response.data.Data.data
                    });
                } 

                //console.log('bodegas data ', this.bodegas);
        },
        getUsersB: function () {

                    var urlUsersB = '/Users';
                    axios.get(urlUsersB).then(
                    response=>{
                        this.usersB = response.data.DataUsers
                    });
                    this.usersData = this.usersB;

                    //console.log('usersB ', this.usersData ); 
        },

        getUsersD: function () {

                    var urlUsersD = '/Users';
                    axios.get(urlUsersD).then(
                    response=>{ 
                        this.usersData = response.data.DataUsers
                    }); 
 
       
        },
        updateProducts: function (product) {

                if (confirm('¿ Desear Actualizar el estado de '+product.nombre+' ?')) {
                    var urlUpdate = `products/${product.id}`;

                    if (product.estado == 0 ) {
                        this.UpdateStateProduct.id_productos = product.id;
                        this.UpdateStateProduct.Estados = 1;  //.Estados = '1';

                        var state = '1';
                    }else {
                        this.UpdateStateProduct.id_productos = product.id;
                        this.UpdateStateProduct.Estados = 0; // .Estados = '0';

                        var state = '0';

                    } 
                    console.log('seva update ', this.UpdateStateProduct);
                    axios.put( urlUpdate, this.UpdateStateProduct ).then(response=>{
                        this.getProductsD();
                        // refrescamos la funcion
                        this.UpdateStateProduct = {'id_productos': '', 'Estados': ''};
                        this.errors = [];
                        //toastr.success('State Update Correctly');
                    }).catch(error =>{
                        this.errors = 'Corrija para poder editar con éxito'
                    });
                }

        },
        cambiarEstadoUsuario(){ this.$refs.cambiarEstado.toggle() },
        agregarProducto(){ 
            this.$refs.modalAgregarProducto.toggle(),
            this.getInventario()
        },
        trasnferirProducto(){ this.$refs.modalTransferirProducto.toggle() }
       
        
    }
}
</script>

<style lang="css" scoped>
.border-dark{
    border: 1px solid #8a8a8a
}
</style>
