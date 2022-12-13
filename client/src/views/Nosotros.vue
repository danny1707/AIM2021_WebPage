<template >
   <div>
    <!-- CARDS -->
    <div>
        <br>
        <main class="page-content">
            <div class="card">
                <div class="content">
                    <h2 class="title">OBJETIVOS</h2>
                    <img src="http://aimoficial.com/Backup/images/Nosotros/iconos/Objetivo_W.png" class="title img-fluid" alt="" width="60">
                    
                    <p>Conoce nuestros objetivos</p>

                    <div class="text-center">
                        <v-dialog
                        v-model="dialog_OBJETIVOS"
                        width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="black lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            Conocenos
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title class="headline grey lighten-2">
                            OBJETIVOS
                            </v-card-title>

                            <v-card-text>
                                <br>
                                Un capítulo estudiantil es una sede activa dentro de la organización de AIM compuesta por 
                                miembros estudiantiles y asesores en una universidad o instituto técnico para representar y satisfacer 
                                las necesidades de los miembros y la misión de la AIM. 
                                Cada grupo realizará sus actividades dentro lo establecido en la Constitución y Estatutos de AIM.
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="black"
                                text
                                
                                @click.prevent="CERRAR()"    
                            >
                                Aceptar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">MISIÓN</h2>
                    <img src="http://aimoficial.com/Backup/images/Nosotros/iconos/Mision_W.png" class="title img-fluid" alt="" width="60">
                    
                    <p>Calidad profesional </p>

                    <div class="text-center">
                        <v-dialog
                        v-model="dialog_MISION"
                        width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="black lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            ver
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title class="headline grey lighten-2">
                            MISIÓN
                            </v-card-title>

                            <v-card-text>
                                <br>
                                Procurar y asegurar la calidad profesional de nuestra comunidad,
                                a través de la vinculación entre el estudiando, egresados e industrias,
                                por medio de proyectos en pro de la ingeniería que mejoren el bienestar social.
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="black"
                                text
                                
                                @click.prevent="CERRAR()"    
                            >
                                Aceptar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>
                </div>
            </div>

            




            <div class="card">
                <div class="content">
                    <h2 class="title">VISIÓN</h2>
                    <img src="http://aimoficial.com/Backup/images/Nosotros/iconos/Vision_W.png" class="title img-fluid" alt="" width="60">

                    
                    <p>Desarrollo de sus miembros</p>

                    <div class="text-center">
                        <v-dialog
                        v-model="dialog_VISION"
                        width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="black lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            VER
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title class="headline grey lighten-2">
                            VISION
                            </v-card-title>

                            <v-card-text>
                                <br>
                                AIM es una asociación que busca el desarrollo de sus 
                                miembros, estudiantes y egresados, a través de 
                                actividades que desarrollen el ingenio, la creatividad y 
                                el trabajo en equipo, dirigiéndolos a retos que crearan 
                                a los futuros líderes de la industria tecnológica.
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="black"
                                text
                                
                                @click.prevent="CERRAR()"
                                
                            >
                                Aceptar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>

                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">VALORES</h2>
                    <img src="http://aimoficial.com/Backup/images/Nosotros/iconos/Valores2_W.png" class="title img-fluid" alt="" width="60">
                    
                    <p class="copy">Conoce nuestros los valores</p>

                    <div class="text-center">
                        <v-dialog
                        v-model="dialog_VALORES"
                        width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            color="black lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                            VER
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-title class="headline grey lighten-2 ">
                            VALORES
                            </v-card-title>

                            <v-card-text>
                                <br>
                                -Empeño
                                <br>
                                -Creatividad
                                <br>
                                -Compromiso
                                <br>
                                -Liderazgo

                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="black"
                                text
                                
                                @click.prevent="CERRAR()"
                                
                            >
                                Aceptar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </div>

                </div>
            </div>
        </main>
        
    </div>


    <!-- EQUIPO -->

    <!-- For demo purpose -->
<div class="container py-5 text-center">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1  class="text-center ml-4 display-3 font-weight-thin mb-4 black--text"> EQUIPO AIM </h1>
            <p class="text-center ml-4 headline black--text">Te presentamos al equipo que forma parte de esta asociacion</p>
        </div>
    </div>
</div><!-- End -->


<div class="container">
    <div class="row text-center">

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow py-5 px-4"><img src="http://aimoficial.com/images//Nosotros/jony.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Jonathan Duarte</h5><span class="small text-uppercase text-muted">Cargo</span>
            <br><br>
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow py-5 px-4"><img src="http://aimoficial.com/images//Nosotros/norman.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Norman Rueda</h5><span class="small text-uppercase text-muted">Cargo</span>
            <br><br>
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">Persona de prueba</span>
                <br><br>
            </div>
        </div><!-- End -->

        <!-- Team item -->
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow py-5 px-4"><img src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">Persona de prueba</span>
                <br><br>
            </div>
        </div><!-- End -->
    </div>
</div>




</div>


<!-- EQUIPO -->



</template>


<script>
export default {
    data () {
      return {
          dialog_OBJETIVOS: false,
          dialog_MISION: false,
          dialog_VISION: false,
          dialog_VALORES: false,
      }
    },
    methods:{
    CERRAR()
    {
        this.dialog_OBJETIVOS = false,
        this.dialog_MISION = false,
        this.dialog_VISION = false,
        this.dialog_VALORES = false

    },
    }
  }
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap');
 :root {
	 --d: 700ms;
	 --e: cubic-bezier(0.19, 1, 0.22, 1);
	 --font-sans: 'Rubik', sans-serif;
	 --font-serif: 'Cardo', serif;
}
 * {
	 box-sizing: border-box;
}
/*
 html, body {
	 height: 100%;
}
 body {
	 display: grid;
	 place-items: center;
}
*/
 .page-content {
	 display: grid;
	 grid-gap: 1rem;
	 padding: 1rem;
	 max-width: 1024px;
	 margin: 0 auto;
	 font-family: var(--font-sans);
}
 @media (min-width: 600px) {
	 .page-content {
		 grid-template-columns: repeat(2, 1fr);
	}
}
 @media (min-width: 800px) {
	 .page-content {
		 grid-template-columns: repeat(4, 1fr);
	}
}
 .card {
	 position: relative;
	 display: flex;
	 align-items: flex-end;
	 overflow: hidden;
	 padding: 1rem;
	 width: 100%;
	 text-align: center;
	 color: whitesmoke;
	 background-color: whitesmoke;
	 box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
}

 @media (min-width: 600px) {
	 .card {
		 height: 350px;
	}
}

 .card:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 background-size: cover;
	 background-position: 0 0;
	 transition: transform calc(var(--d) * 1.5) var(--e);
	 pointer-events: none;
}
 .card:after {
	 content: '';
	 display: block;
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 200%;
	 pointer-events: none;
	 background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.320) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.540) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.790) 100%);
	 transform: translateY(-50%);
	 transition: transform calc(var(--d) * 2) var(--e);
}
 .card:nth-child(1):before {
	 background-image: url(http://aimoficial.com/Backup/images/Nosotros/iconos/azul_claro.png);
}
 .card:nth-child(2):before {
	 background-image: url(http://aimoficial.com/Backup/images/Nosotros/iconos/amarillo.png);
}
 .card:nth-child(3):before {
	 background-image: url(http://aimoficial.com/Backup/images/Nosotros/iconos/azul_oscuro.png);
}
 .card:nth-child(4):before {
	 background-image: url(http://aimoficial.com/Backup/images/Nosotros/iconos/naranja.png);
}
 .content {
	 position: relative;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 width: 100%;
	 padding: 0rem;
	 transition: transform var(--d) var(--e);
	 z-index: 1;
}

 .title {
	 font-size: 1.3rem;
	 font-weight: bold;
	 line-height: 1.2;
     
     
}
/* --- TEXTO EN MAUSCRITO---
 .copy {
	 font-family: var(--font-serif);
	 font-size: 1.125rem;
	 font-style: italic;
	 line-height: 1.35;
}
*/
/*  ----BOTNOES CSS----

 .btnCard {
	 cursor: pointer;
	 margin-top: 1.5rem;
	 padding: 0.75rem 1.5rem;
	 font-size: 0.65rem;
	 font-weight: bold;
	 letter-spacing: 0.025rem;
	 text-transform: uppercase;
	 color: white;
	 background-color: black;
	 border: none;
}
 .btnCard:hover {
	 background-color: #ffffff;
     color: black;
}
 .btnCard:focus {
	 outline: 1px dashed yellow;
	 outline-offset: 3px;
}

*/

 @media (hover: hover) and (min-width: 600px) {
	 .card:after {
		 transform: translateY(0);
	}
	 .content {
		 transform: translateY(calc(100% - 4.5rem));
	}
	 .content > *:not(.title) {
		 opacity: 0;
		 transform: translateY(1rem);
		 transition: transform var(--d) var(--e), opacity var(--d) var(--e);
	}
	 .card:hover, .card:focus-within {
		 align-items: center;
	}
	 .card:hover:before, .card:focus-within:before {
		 transform: translateY(-4%);
	}
	 .card:hover:after, .card:focus-within:after {
		 transform: translateY(-50%);
	}
	 .card:hover .content, .card:focus-within .content {
		 transform: translateY(0);
	}
	 .card:hover .content > *:not(.title), .card:focus-within .content > *:not(.title) {
		 opacity: 1;
		 transform: translateY(0);
		 transition-delay: calc(var(--d) / 8);
	}
	 .card:focus-within:before, .card:focus-within:after, .card:focus-within .content, .card:focus-within .content > *:not(.title) {
		 transition-duration: 0s;
	}
}
 




 
</style>
