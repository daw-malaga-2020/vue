<template>
  <div>
       <div class="container">
            <div class="row">
                <div class="col">
                    <div class="weather-card one">
                        <div class="top">
                            <div class="wrapper">
                                <input type="text" v-model="city">
                                <button >Buscar</button>
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
import axios from 'axios'
export default {
  name: 'Weather',
  data(){
      return{
          city:"malaga",
          weather:"",
          wind:"",
          temp:"",
          humidity:"",
          token : "3408896f1d019f9845f9f0726d4dab41",
          lang : "es",
          unit : "metric"
      }
  },
  async mounted(){
      let response = await this.$http(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.token}&lang=${this.lang}&units=${this.unit}`)
      this.weather=response.weather[0].description.toUpperCase()
      this.temp=  Math.trunc(response.main.temp)
      this.humidity= response.main.humidity
      this.wind= response.wind.speed
  }
  
}
</script>

