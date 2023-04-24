<!-- # Rehome -->

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default title!
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="$emit('aclose')"
        >x
        </button>
      </header>

      <section class="modal-body">
        <slot name="our_projects_body">
        Our body aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhh
        </slot>
        <slot name="our_projects_body_2">
        Our body omg omg omg 
        </slot>

        
          <!-- ReHome here!
        </slot>
        <slot name="ReSykkel_body">
          ReSykkle here!
        </slot>
        <slot name="Replant_body">
          RePlant here!
        </slot>
        <slot name="ReFood_body">
          ReFood here!
        </slot>
        <slot name="ReStore_body">
          ReStore here!
        </slot>
        <slot name="ReBuild_body">
          ReBuild here! -->
        
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="$emit('aclose')"
        >
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>


<!-- # ReBuild -->

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2); /*Modal backdrop color and opacity*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: white !important;
    
    box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3); /*box shadow: background: earlier 2px 2px 0px 1px; transparent*/
    /* overflow-x: auto; */ /* overflow: allows for scroll within */
   
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
  
    /* centering the modal box */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }



  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: white;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>