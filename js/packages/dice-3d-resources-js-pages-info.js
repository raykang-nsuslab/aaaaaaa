"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  [2195],
  {
    82932: (t, n, e) => {
      e.r(n), e.d(n, { default: () => _ });
      var i = e(15537),
        o = e(85893),
        a = e(5255),
        s = e(91864),
        l = e(22515),
        r = e(756),
        c = e(83987),
        f = e(83606),
        h = e(33689),
        u = e(96878),
        b = e(73845);
      const d = {
        data: function () {
          return { infoTab: "tab-about" };
        },
      };
      const _ = (0, e(51900).Z)(
        d,
        function () {
          var t = this,
            n = t._self._c;
          return n(
            o.Z,
            [
              n(
                u.Z,
                {
                  scopedSlots: t._u([
                    {
                      key: "extension",
                      fn: function () {
                        return [
                          n(
                            f.Z,
                            {
                              attrs: { centered: "", "hide-slider": "" },
                              model: {
                                value: t.infoTab,
                                callback: function (n) {
                                  t.infoTab = n;
                                },
                                expression: "infoTab",
                              },
                            },
                            [
                              n(r.Z, { attrs: { href: "#tab-about" } }, [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("How to play")) +
                                    "\n        "
                                ),
                              ]),
                            ],
                            1
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                [
                  n(b.qW, [
                    t._v(
                      "\n      " + t._s(t.$t("Game information")) + "\n    "
                    ),
                  ]),
                  t._v(" "),
                  n(l.Z),
                  t._v(" "),
                  n(
                    i.Z,
                    {
                      attrs: { icon: "" },
                      on: {
                        click: function (n) {
                          return t.$emit("close");
                        },
                      },
                    },
                    [n(s.Z, [t._v("mdi-close")])],
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              n(
                h.Z,
                {
                  model: {
                    value: t.infoTab,
                    callback: function (n) {
                      t.infoTab = n;
                    },
                    expression: "infoTab",
                  },
                },
                [
                  n(
                    c.Z,
                    { attrs: { value: "tab-about" } },
                    [
                      n(
                        o.Z,
                        { attrs: { flat: "" } },
                        [
                          n(a.ZB, { staticClass: "about-text" }, [
                            n("p", [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t.$t(
                                      "The goal of the game is to predict which range the sum of points of all dice will fall into."
                                    )
                                  ) +
                                  "\n            " +
                                  t._s(
                                    t.$t(
                                      "Scroll the slider to adjust the range."
                                    )
                                  ) +
                                  "\n            " +
                                  t._s(
                                    t.$t(
                                      'Throw the dice by clicking "Play" button or holding the left mouse button and moving it in the direction of the throw.'
                                    )
                                  ) +
                                  "\n          "
                              ),
                            ]),
                            t._v(" "),
                            n("p", [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t.$t(
                                      "The probability of winnings and win coefficient are in strict dependence of the winning chance and the width of the range."
                                    )
                                  ) +
                                  "\n            " +
                                  t._s(
                                    t.$t(
                                      "It means that the probability of winning is higher when the range is wider and vice versa."
                                    )
                                  ) +
                                  "\n          "
                              ),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
    },
  },
]);
