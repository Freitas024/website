// Importa o styled-components para podermos estender seus tipos
import 'styled-components';

// Importa o seu objeto de tema para inferirmos o tipo dele
import { theme } from '../styles/theme'; // <-- ATENÇÃO: Ajuste o caminho para o seu arquivo de tema!

// Cria um tipo 'ThemeType' a partir do seu objeto de tema.
// O 'typeof' aqui é um operador do TypeScript que extrai a estrutura de um objeto como um tipo.
type ThemeType = typeof theme;

// Esta é a parte mágica: estamos usando "Declaration Merging" do TypeScript.
// Estamos reabrindo o módulo 'styled-components' para estender a interface DefaultTheme.
declare module 'styled-components' {
  // Agora, estamos dizendo que a DefaultTheme é exatamente igual ao nosso ThemeType.
  export interface DefaultTheme extends ThemeType {}
}