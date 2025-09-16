import { HeroInfoContent, TextContent, SubText } from "./style";
import Tag from "../Tag/Tag";
import { Sparkles } from "lucide-react"
import Button from "../Button/Button"

export default function HeroInfo() {
  return (
    <HeroInfoContent>
      <Tag
        icon={<Sparkles size={18} color="#7543FE" />}
        text="Front-end & UX/UI Designer"
      />
      <TextContent>
        Criando experiências digitais, <span>do pixel ao código</span>
      </TextContent>
      <SubText>
        Vinicius Freitas - Desenvolvedor Front-end & UX/UI Designer
      </SubText>
      <Button text="Projetos"/>
    </HeroInfoContent>
  );
}
