<template>
  <div>
       <div class="container">
            <div class="row">
                <div class="col">
                    <div class="weather-card one">
                        <div class="top">
                            <div class="wrapper">
                                <input type="text" v-model="cityInput">
                                <button @click="changeWeather">Buscar</button>
                                <h1 class="heading">{{weather}}</h1>

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
                                                <i class="fas fa-tint"></i> Humedad
                                        </span>
                                        <span class="lnr condition">
                                            <span class="temp"><span class="humidity">{{humidity}}</span><span class="temp-type"> %</span></span>
                                        </span>
                                    </li>
                                    <li>
                                        <span class="date">
                                                <i class="fas fa-wind"></i> Viento
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
</template>

<script>
export default {
  name: 'Weather',
  data(){
      return{
          cityInput:"Málaga, es",
          weather:"",
          wind:"",
          temp:"",
          humidity:"",
      }
  },
  methods: {
    async changeWeather(){
      
      let token = "3408896f1d019f9845f9f0726d4dab41"
      let lang = "es"
      let unit = "metric"
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityInput}&appid=${token}&lang=${lang}&units=${unit}`
      
      let response = await this.axios.get(url)
      this.weather=response.data.weather[0].description
      this.temp=  Math.trunc(response.data.main.temp)
      this.humidity= response.data.main.humidity
      this.wind= response.data.wind.speed
    }
  },
  async mounted(){
      this.changeWeather()
  }
  
}
</script>

