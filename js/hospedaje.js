const { createApp } = Vue

  createApp({
    data() {
      return {
       
        hoteles:[],
        url:"http://engine.hotellook.com/api/v2/lookup.json?query=argentina",   
     }
    },
    methods: {
        fetchData(url) {  
            
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.hoteles=data.results.hotels
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)                                                        
    }
  }).mount('#hoteles')