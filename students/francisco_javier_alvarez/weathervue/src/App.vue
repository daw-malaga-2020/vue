<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="weather-card one">
                    <div class="top">
                        <form action="">
                            <select class="wrapper" v-model="countrySelected" name="location" @change="loadWeatherSelected">
                                <option v-for="item in locations" :value="item.value" :key="item.id">{{ item.name }}</option>
                            </select>

                        </form>
                        <div class="wrapper">
                            <h1 class="heading" v-show="heading">{{ heading }}</h1>
                            <h3 class="location" >{{ countrySelected }}</h3>
                            <p class="temp" v-show="temp">
                                <span class="temp-value" >{{ temp }}</span>
                                <span class="deg">0</span>
                                <a href="javascript:;"><span class="temp-type">C</span></a>
                            </p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="wrapper">
                            <ul class="forecast mt-4">
                                <li>
                                    <span class="date"><i class="fas fa-tint"></i> Humedad</span><span class="lnr condition">
                                    <span class="temp" v-show="hum"><span class="humidity">{{ hum }}</span><span class="temp-type"> %</span></span>
                                    </span>
                                </li>
                                <li>
                                    <span class="date"><i class="fas fa-wind"></i>Viento</span><span class="lnr condition">
                                    <span class="temp" v-show="wind"><span class="wind-speed">{{ wind }}</span><span class="temp-type"> m/s</span></span>
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
  data(){
    return{
      countrySelected: 'Málaga, es',
      locations: [
          {id: 1, name: 'Málaga', value:'Málaga, es'},
          {id: 2, name: 'Sevilla', value:'Sevilla, es'},
          {id: 3, name: 'Barcelona', value:'Barcelona, es'}
      ],                
      heading: "",
      temp: "",
      hum: "",
      wind: "",
    }
  },
  methods: {
        async loadWeatherSelected(){
            const   token = "3408896f1d019f9845f9f0726d4dab41",
                lang = "es",
                unit = "metric"

            let URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.countrySelected}&appid=${token}&lang=${lang}&units=${unit}`

            let response = await this.axios.get(URI)

            this.heading = response.data.weather[0].description
            this.temp = Math.trunc(response.data.main.temp)
            this.wind = response.data.wind.speed
            this.hum = response.data.main.humidity
        }
  },
  mounted(){
    this.loadWeatherSelected()
  },
  name: 'App',
  components: {

  }
}
</script>
