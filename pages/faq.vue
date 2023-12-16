<template>
  <div class="main_content">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <div
          class="accordion-item-header"
          id="headingOne"
          type="button"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h1>General</h1>
        </div>
        <div
          class="accordion-item-body collapse show"
          id="collapseOne"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="accordion-item-body-content">
            <h3>Where are you located?</h3>
            <p>
              We have two buildings at Moholt Studentby in Trondheim.
              <a
                href="https://goo.gl/maps/5LbnwiFeX4erbNyR6"
                class="google_maps anchor"
                target="_blank"
                >ReStore Red</a
              >
              is the old Moholt kindergarten, which is down the hill from the
              new Moholt kindergarten. We organize donated items in this
              building. Also we have workshops for repairing bicycles and
              furniture at the same place.

              <a
                href="https://goo.gl/maps/GQhuMvDGDUHE3yWw8"
                class="google_maps anchor"
                target="_blank"
                >ReStore Yellow,</a
              >
              is just behind the Red building, and we have a sewing workshop,
              plant room and a cozy space for our volunteers to have social
              events in this building.
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
              We’re always happy to have more volunteers. We especially need
              volunteers in December/January and May/June. You can volunteer as
              much as you want and have time for!! Check out
              <a
                class="anchor"
                href="https://linktr.ee/restore.trd"
                target="_blank"
                >this link</a
              >
              for becoming a volunteer and more information!
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
              We give away the items on opening days, which are usually held at
              the beginning of each semester (August and January). Check
              <a
                class="anchor"
                href="https://www.facebook.com/ReStore.TRD"
                target="_blank"
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
            <p>We are also lucky to have generous support from Sit Bolig.</p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Is ReStore only for NTNU students?</h3>
            <p>
              All students in Trondheim are welcome, whether you’re from NTNU,
              BI, HiST, or DMMH. PhD students, you’re students too!
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
            <h3>Can I donate my bed/mattress?</h3>
            <p>
              Unfortunately not. Due to bedbug concerns we are unable to accept
              beds and mattresses. But we accept bed frames.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>When can I donate items</h3>
            <p>
              You can leave your donations on the back side portch at our Red
              building at anytime. But it is highly recommended to donate items during donation hours on Saturdays from 10 to 12 (only in December) and Tuesdays from 17:00-18:00, so that our volunteers can take in the items and organize
              them quickly.
            </p>
          </div>
          <div class="accordion-item-body-content">
            <h3>Can you pick up my stuff?</h3>
            <p>
              Definetely! Check available pickup dates
              <a
                class="anchor"
                href="https://docs.google.com/forms/d/e/1FAIpQLScaC410K55v9Kc5os30IyLhloetM1r1HKKSMoU0MlU1ZZcnBw/viewform"
                target="_blank"
                >here</a
              >. It's free of charge but it all has a cost, so you can donate to
              us via Vipps so we can keep doing what we do! Our Vipps number is
              571348.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const accordionItemHeaders = document.querySelectorAll(
      ".accordion-item-header"
    );

    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.addEventListener("click", (event) => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight =
            accordionItemBody.scrollHeight + "px";
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  },
};
</script>

<style></style>
