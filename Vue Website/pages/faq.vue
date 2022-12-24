<template>
    <div class="main_content">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <div class="accordion-item-header" id="headingOne" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <h1>General</h1>
        </div>
        <div class="accordion-item-body collapse show" id="collapseOne"   aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="accordion-item-body-content">
            <h3>Where is the old Moholt kindergarten?</h3>
            <p>
              Just down the hill from the new Moholt kindergarten-
              <a
                href="https://goo.gl/maps/5LbnwiFeX4erbNyR6"
                class="google_maps anchor"
                target="_blank"
                >here is a link to our location on google maps</a
              >
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Why are you doing this?</h3>
            <p>
              We're just a bunch of people who don't like seeing good stuff go
              to waste.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>This seems really cool, how can I get involved?</h3>
            <p>
              Send us a message on FB or email info@restore-trd.no! We’re always
              happy to have more volunteers. We especially need volunteers in
              December/January and May/June. Check out the
              <a class="anchor" href="/contact">Contact page</a> for details!
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-item-header"><h1>Taking</h1></div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
            <h3>When can I come by to take things?</h3>
            <p>
              Check
              <a class="anchor" href="https://www.facebook.com/ReStore.TRD" target="_blank"
                >our Facebook page</a
              >
              for details and updates.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>How is that even possible?</h3>
            <p>
              All these goods were donated by past students to help you out. We
              ask that you pay it forward by bringing the items back when you're
              done with them :)
            </p>
            <p>
              We are also lucky to have generous support from the Velferdstinget
              and Sit Bolig.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Is ReStore only for NTNU students?</h3>
            <p>
              All students in Trondheim are welcome, whether you’re from NTNU,
              BI, HiST, or DMMH. PhD students, you’re students too!
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>
              I need this table, but it has a bunch of stuff on it. Can I move
              the stuff and take the table?
            </h3>
            <p>
              Talk to our volunteers (in the super-fly ReStore gear) and we'll
              figure something out with you.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <div class="accordion-item-header"><h1>Giving</h1></div>
        <div class="accordion-item-body">
          <div class="accordion-item-body-content">
            <h3>What sort of things do you take?</h3>
            <p>
              We'll take your household goods (big and small) that you think a
              student would be happy to have! Hangers, laundry racks, kitchen
              equipment, and desk lamps are especially popular items.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Can you pick up my stuff?</h3>
            <p>
              Definetely! Check available pickup dates
              <a class="anchor"
                href="https://docs.google.com/forms/d/1erG95Q3LJsnqtHV35bYwMFx2KFuoEVWRfVlY53hqDXo/edit"
                target="_blank"
                >here</a
              >. It's free of charge but it all has a cost, so you can donate to
              us via Vipps so we can keep doing what we do! Our Vipps number is
              571348.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Can I donate my bed/mattress?</h3>
            <p>
              Unfortunately not. Due to bedbug concerns we are unable to accept
              beds and mattresses. But we accept bed frames.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>  
   
</template>

<script>
export default {
  mounted(){
    const accordionItemHeaders = document.querySelectorAll(
    '.accordion-item-header'
  );
  
  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', (event) => {
      accordionItemHeader.classList.toggle('active');
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains('active')) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
  }
};
</script>

<style></style>
