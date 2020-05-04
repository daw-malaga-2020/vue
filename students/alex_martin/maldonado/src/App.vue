<template>
    <div class="container">
            <div class="row">
                <div class="col">
                    <div class="weather-card one">
                        <div class="top">
                            <div class="wrapper">
                                <select id="locationSelect" class="form-control" v-model="countrySelected" @change="loadWeatherSelected">
                                    <option v-for="item in locations" :value="item.value" :key="item.id" >{{ item.name }}</option>
                                </select>
                                <h1 class="heading">{{weather}} {{name}}</h1>

                                <p class="temp">
                                    <span class="temp-value">{{ temp }}</span>
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
                                                <i class="fas fa-tint"></i> Humedad
                                        </span>
                                        <span class="lnr condition">
                                            <span class="temp"><span class="humidity">{{hum}}</span><span class="temp-type"> %</span></span>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="date">
                                                <i class="fas fa-wind"></i> Viento
                                        </span>
                                        <span class="lnr condition">
                                            <span class="temp"><span class="wind-speed">{{ wind }}</span><span class="temp-type"> m/s</span></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data(){
    return{
      countrySelected:"Málaga, es",
      locations: [
          {id: 1, name: "Málaga", value: "Málaga, es" }, 
          {id: 2, name:"Sevilla", value:"Sevilla, es"}, 
          {id: 3, name:"Huelva", value: "Huelva, es"},
          {id: 4, name:"Pyongyang", value: "Pyongyang, North Korea"},
      ],
      temp: "",
      hum: "",
      weather: "",
      wind:"",
      name: ""
    }
  },
  methods: {
    async loadWeatherSelected(){
      const token = "3408896f1d019f9845f9f0726d4dab41";
      const lang = "es";
      const unit = "metric";
      
      let URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.countrySelected}&appid=${token}&lang=${lang}&units=${unit}`;  
      
      try{
        let response= await this.axios.get(URI)
        this.weather=response.data.weather[0].description
        this.temp=Math.trunc(response.data.main.temp)
        this.wind = response.data.wind.speed
        this.hum= response.data.main.humidity 
        this.name = response.data.name
      }catch(e){
          alert(e.message)
      }
    }
  },
  mounted(){
   this.loadWeatherSelected()
  },
  name: 'App',
  components: {
  },
}
</script>