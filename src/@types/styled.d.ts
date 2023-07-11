// import original module declarations
import "styled-components";
import ThemeType from "./Theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    test?: string;
  }
}
