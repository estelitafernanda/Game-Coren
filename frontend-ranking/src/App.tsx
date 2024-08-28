import { ThemeProvider } from "styled-components";
import { Transactions } from "./page/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Transactions />
    </ThemeProvider>
  )
}
