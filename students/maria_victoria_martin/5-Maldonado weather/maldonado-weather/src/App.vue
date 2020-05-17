<template>
  <div id="app">
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="weather-card one">
                        <div class="top">
                            <div class="wrapper">
                                <select  id="locationSelect" class="form-control" v-model="countrySelected"   
                                    @change="changeLocation"> 
                                    <option v-for="item in locations" :key="item.id"
                                       :value="item.value">{{item.name}}</option>
                                </select>
                                <h1 class="heading">{{title}}</h1>

                                <p class="temp">
                                    <span class="temp-value">{{temp}}</span>
                                    <span class="deg">0</span>
                                    <a href="javascript:;"><span class="temp-type">C</span></a>
                                </p>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="wrapper">
                                <ul class="forecast mt-4">
                                    <li>
                                        <span class="date">
                                                <i class="fas fa-tint"></i> Humidity
                                        </span>
                                        <span class="lnr condition">
                                            <span class="temp"><span class="humidity">{{humidity}}</span><span class="temp-type"> %</span></span>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="date">
                                                <i class="fas fa-wind"></i> Wind
                                        </span>
                                        <span class="lnr condition">
                                            <span class="temp"><span class="wind-speed">{{wind}}</span><span class="temp-type"> m/s</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      countrySelected:"Málaga, es",
       locations:[
         {id:1, name:"Málaga", value:"Málaga, es", },
         {id:2, name:"Sevilla", value:"Sevilla, es", },
         {id:3, name:"Huelva", value:"Huelva, es", },
       ],
       title:"",
       temp:"",
       humidity:"",
       wind:"",


    }
  },
  components: {
  },
  methods:{
  async changeLocation(){
      const token = "3408896f1d019f9845f9f0726d4dab41";
      const lang = "es";
      const unit = "metric";
      
      let URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.countrySelected}&appid=${token}&lang=${lang}&units=${unit}`;  
      let response= await this.axios.get(URI)

    this.title = response.data.weather[0].description.toUpperCase() //data es un metodo de axios que devuelve la respuesta
    this.temp =  Math.trunc(response.data.main.temp)
    this.humidity = response.data.main.humidity
    this.wind = response.data.wind.speed
   }
  },
  mounted(){
      this.changeLocation()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
