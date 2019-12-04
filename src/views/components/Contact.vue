<template>
  <section class="section section-lg pt-lg-0 mt--300">
    <div class="container">
      <div id="contact" class="row justify-content-center">
        <div class="col-lg-8">
          <card gradient="secondary" shadow body-classes="p-lg-5">
            <h4 class="mb-1">Want to work with us?</h4>
            <p class="mt-0">Your project is very important to us.</p>
            <base-input
              class="mt-5"
              alternative
              placeholder="Your name"
              addon-left-icon="ni ni-user-run"
            ></base-input>
            <base-input alternative placeholder="Email address" addon-left-icon="ni ni-email-83"></base-input>
            <base-input class="mb-4">
              <textarea
                class="form-control form-control-alternative"
                name="name"
                rows="4"
                cols="80"
                placeholder="Type a message..."
              ></textarea>
            </base-input>
            <base-button type="default" round block size="lg">Send Message</base-button>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
  components: {}
};
</script>