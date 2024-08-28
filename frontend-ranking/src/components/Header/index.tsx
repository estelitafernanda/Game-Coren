import { HeaderContainer, HeaderContent, HeaderTextRanking } from "./styles";

import imgLogoCoren from '../../assets/logoCorenRN.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        
          <img src={imgLogoCoren} alt="Logo Coren-RN" />

        <HeaderTextRanking>
          Ranking
        </HeaderTextRanking>

      </HeaderContent>
    </HeaderContainer>
  )
}