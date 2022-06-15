module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        container:{
            center:true,
            padding:'20px',
            screens:{
                sm:'640px',
                md:'768px',
                lg:'1024px',
                xl:'1180px'
            }
        }
      },
    },
    plugins: [],
  }