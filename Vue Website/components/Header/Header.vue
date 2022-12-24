<template>
 <div id="navbar" class="navbar">
    
         <!-- <h1 class="logo"><nuxt-link class="logo_link" to="/"><b>RE</b>STORE</nuxt-link> </h1>  -->
         <h1 class="logo"><a class="logo_link" href="/"><b>RE</b>STORE</a> </h1>
        <button class="hamburger" @click="humburger" id="hamburger">
            &#9776
        </button>
        <ul class="nav-ul" id="nav-ul">   
<!--             
            <li id="nav-li" class="nav-li"><nuxt-link to="/about" class="showing"  id="showing"> ABOUT</nuxt-link></li>
            <li  id="nav-li" class="nav-li  "> <nuxt-link to="/contact"  class="showing1"   id="showing1"> CONTACT</nuxt-link></li>
            <li  id="nav-li" class="nav-li"> <nuxt-link to="/faq"  class="showing2"  id="showing2"> FAQ</nuxt-link></li>
            <li  id="nav-li" class="nav-li"> <nuxt-link to="/volenteer" class="showing3"  id="showing3" target="_blank"> Become volunteer </nuxt-link></li>    -->
               
              <li id="nav-li" class="nav-li"><a href="/about" class="showing"  id="showing"> ABOUT</a></li>
            <li  id="nav-li" class="nav-li  "> <a  href="/contact"  class="showing1" id="showing1"> CONTACT</a></li>
            <li  id="nav-li" class="nav-li"> <a href="/faq"  class="showing2"  id="showing2"> FAQ</a></li>
            <li  id="nav-li" class="nav-li"> <a href="/volunteer" class="showing3"  id="showing3" > Become volunteer </a></li>   
              
        </ul>
    </div>  

    
</template>

<script>
 
// document.ready(function(){
// 	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
// 		this.classList.toggle("open");
// 	});
// });

export default {
   
  mounted() {
       this.$nextTick(() => {
         
    //     document.querySelectorAll('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').addEventListener('click', (event) => {
	// 	this.classList.toggle("open");
	// });
 
      });
    },
    
    methods:{
     
        humburger(){
        const navBar = document.getElementById('navbar');
        const navUL = document.getElementById('nav-ul');
        
         const Show = document.getElementById('showing');
           const Show1 = document.getElementById('showing1');
      const Show2 = document.getElementById('showing2');
          const Show3 = document.getElementById('showing3');
          navUL.classList.toggle('show');
          navBar.classList.toggle('show');
          Show.classList.toggle('show')
            Show1.classList.toggle('show')
          Show2.classList.toggle('show')
          Show3.classList.toggle('show')  
        
        
	  },
       
        
 
    }
}
</script>
 
<style>

</style>