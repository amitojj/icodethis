/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      colors: {
        mbg: "#27292B",
        bg1: "#2F3133",
        bg2: "#232526",
        bbg: "#1C1E1F",
        tc: "#F6C73E",
        oc1: "#05AAF6",
        oc2: "#AA01FF",
        oc3: "#F40058",
      },
      fontSize: {
        "2xs": "10px",
      },
      borderRadius: {
        fancy: "0% 0% 43% 57% / 0% 0% 25% 32%",
      },
      fontFamily: {
        rale: "Raleway , sans-serif",
        nun: "Nunito, sans-serif",
        mon: "Montserrat, sans-serif",
        pop: "Poppins ,sans-serif",
      },
      boxShadow: {
        "3xl": "7px 7px 23px 2px #111111",
      },
      animation: {
        beat: "beat  0.5s linear infinite alternate",
        slidefromleft: "slidefromleft 1s ease-in ",
        slidefromtop: "slidefromtop 1s ease-in ",
        slidefrombottom: "slidefrombottom 1s ease-in ",
        slidefromright: "slidefromright 1s ease-in ",
        bgfadein: "bgfadein 2s ease-in ",
        bgfadeout: "bgfadeout 3s ease-out ",
        shadow: "shadow 4s ease-in",
      },
      keyframes: {
        beat: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        slidefromleft: {
          "0%": { transform: "translatex(-300%)" },
          "100%": { transform: "translatex(0%)" },
        },
        slidefromright: {
          "0%": { transform: "translatex(300%)" },
          "100%": { transform: "translatex(0%)" },
        },
        slidefromtop: {
          "0%": { transform: "translatey(-300%)" },
          "100%": { transform: "translatey(0%)" },
        },
        slidefrombottom: {
          "0%": { transform: "translatey(300%)" },
          "100%": { transform: "translatey(0%)" },
        },
        bgfadein: {
          "0%": { " background-color": "rgb(15 23 42 / 0)" },
          "100%": { "background-color": "rgb(15 23 42 / 100)" },
        },
        bgfadeout: {
          "0%": { " background-color": "rgb(15 23 42 / 100)" },
          "100%": { "background-color": "rgb(15 23 42 / 50)" },
        },
        shadow: {
          "0%": {
            "box-shadow": "0px 0px 0px 0px",
          },
          "100%": {
            "box-shadow": "7px 7px 23px 2px #757575",
          },
        },
      },
    },
  },
  plugins: [],
};
