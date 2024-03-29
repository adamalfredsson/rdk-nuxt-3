(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    300: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(0).a.extend({
          props: {
            title: { type: String, required: !0 },
            description: { type: String, required: !0 },
            image: {
              type: String,
              default: "https://nuxtjs.org/nuxt-card.png",
            },
            cloudinary: { type: Boolean, default: !1 },
          },
          head() {
            return {
              meta: [
                {
                  hid: "twitter:title",
                  name: "twitter:title",
                  content: this.title,
                },
                {
                  hid: "twitter:description",
                  name: "twitter:description",
                  content: this.description,
                },
                {
                  hid: "twitter:image",
                  name: "twitter:image",
                  content: this.absoluteImage,
                },
                {
                  hid: "twitter:image:alt",
                  name: "twitter:image:alt",
                  content: this.title,
                },
                { hid: "og:title", property: "og:title", content: this.title },
                {
                  hid: "og:description",
                  property: "og:description",
                  content: this.description,
                },
                {
                  hid: "og:image",
                  property: "og:image",
                  content: this.absoluteImage,
                },
                {
                  hid: "og:image:secure_url",
                  property: "og:image:secure_url",
                  content: this.absoluteImage,
                },
                {
                  hid: "og:image:alt",
                  property: "og:image:alt",
                  content: this.title,
                },
              ],
            };
          },
          computed: {
            absoluteImage() {
              return this.cloudinary
                ? "https://res.cloudinary.com/klandestino-ab/image/upload/c_lfill,dpr_auto,g_faces/c_scale,dpr_2.0,w_1200".concat(
                    this.image
                  )
                : this.image;
            },
          },
        }),
        o = n(2),
        component = Object(o.a)(
          r,
          function () {
            var t = this;
            t._self._c, t._self._setupProxy;
            return t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
