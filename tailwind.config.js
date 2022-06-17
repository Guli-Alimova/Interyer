module.exports = {
    content: ["./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        container:{
            center:true ,
            // padding:'20px'  ,
            screens:{
                sm:'640px',
                md:'768px',
                lg:'1024px',
                xl:'1200px'
            },
         
        }
      },
    },
    plugins: [],
  }