import { sample } from "lodash";

// const tintColor = "#2f95dc";

// export default {
//   tintColor,
//   tabIconDefault: "#ccc",
//   tabIconSelected: tintColor,
//   tabBar: "#fefefe",
//   errorBackground: "red",
//   errorText: "#fff",
//   warningBackground: "#EAEB5E",
//   warningText: "#666804",
//   noticeBackground: tintColor,
//   noticeText: "#fff"
// };

const darkImperialBlue = "#0B4F6C";
const dodgerBlue = "#2196F3";
const paleCarmine = "#BB4430";
const sinopiaOrange = "#CC3F0C";
const kanaduSage = "#73877B";
const ghostWhite = "#FBFBFF";
const wageningenGreen = "#39B54A";
const pearYellow = "#D8D52B";
const soapLavender = "#CBC5EA";
const spanishGray = "#969696";
const tuscanyBeige = "#B79D94";
const pucePink = "#C6878F";
const raspberryGlace = "#96616B";
const blanchedAlmond = "#FFEAD0";
const lightCrimson = "#F76F8E";
const tumbleWeed = "#E0A890";
const viridianGreen = "#129490";
const iguanaGreen = "#70B77E";
const romanSilver = "#819595";
const orangeYellow = "#FFD166";
const darkPastelPurple = "#907AD6";
const newYorkPink = "#D88373";
const northTexasGreen = "#058E3F";
const gainsboroGray = "#DCDCDC";

export const constants = {
  spacing: (multiple) => 10 * multiple,
  palette: {
    primary: dodgerBlue,
    secondary: paleCarmine,
    appbar: darkImperialBlue,
    other: kanaduSage,
    background: ghostWhite,
    transparentBackground: "rgba(251, 251, 255, 0.4)",
    // question: darkImperialBlue,
    // answer: paleCarmine,
    colorOptions: {
      gainsboroGray,
      sinopiaOrange,
      kanaduSage,
      wageningenGreen,
      pearYellow,
      soapLavender,
      spanishGray,
      tuscanyBeige,
      pucePink,
      raspberryGlace,
      blanchedAlmond,
      lightCrimson,
      tumbleWeed,
      viridianGreen,
      iguanaGreen,
      romanSilver,
      orangeYellow,
      darkPastelPurple,
      newYorkPink,
      northTexasGreen,
    },
  },
  randomColor: () => sample(constants.palette.colorOptions),
};

// green: "#66A182",
// purple: "#AFA2B4",
// orange: "#F18805",
// red: "#D95D39",
// blue: "#4CB5AE",
// beige: "#F9D3A4"
