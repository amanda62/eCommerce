import { createMuiTheme, responsiveFontSizes } from "@material-ui/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default theme;
