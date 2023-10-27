<template>
  <div class="main_content">
    <div class="our_story">
      <div class="our_story_left">
        <h1>Our Story</h1>
        <p>
          ReStore is a student organization with roots in Trondheim. At ReStore,
          we work towards upcycling goods, with the goal of creating a greener
          and more inclusive society.
        </p>
        <p>
          In May 2019, in a collaboration with SiT Bolig, ReStore was set up in
          an old kindergarten in Moholt student village and accepted its first
          donations from outgoing students.
        </p>
        <p>
          At the end of each semester, outgoing students discard tonnes of
          usable goods when they return home from exchange. Every January and
          August, new students arrive and need to buy new housewares- the same
          types that were thrown away only months before. This mismatch in
          timing between supply and demand perpetuates a cycle of waste. ReStore
          bridges this gap and facilitates the reuse of goods by storing donated
          goods for incoming students.
        </p>
      </div>
      <img
        src="../assets/images/About/about_new.png"
        alt=""
        class="our_story_img"
      />
    </div>
    <div class="our_projects">
      <div class="our_projects_content">
        <h2 class="our_projects_title">Our Projects test</h2>
        <div class="our_projects_cards">
          <div class="our_projects_cards_row1">
            <div class="restore_card our_projects_single_card card-odd">
              <img
                src="../assets/images/About/Project-icons/Rehome.png"
                alt=""
              />
            </div>
            <div class="resykkel_card our_projects_single_card card-even">
              <img
                src="../assets/images/About/Project-icons/Rebuild.png"
                alt=""
              />
            </div>
            <div class="rebuild_card our_projects_single_card card-odd">
              <img
                src="../assets/images/About/Project-icons/Refood.png"
                alt=""
              />
            </div>
          </div>
          <div class="our_projects_cards_row2">
            <div class="replant_card our_projects_single_card card-even">
              <img
                src="../assets/images/About/Project-icons/Replant.png"
                alt=""
              />
            </div>
            <div class="rehome_card our_projects_single_card card-odd">
              <img
                src="../assets/images/About/Project-icons/Restore.png"
                alt=""
              />
            </div>
            <div class="refood_card our_projects_single_card card-even">
              <img
                src="../assets/images/About/Project-icons/Resykkel.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "about",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style></style>
