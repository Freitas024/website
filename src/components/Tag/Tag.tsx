import { TagContent } from "./style";

export default function Tag({
  text,
  icon,
}: {
  text: String;
  icon?: React.ReactNode;
}) {
  return (
    <TagContent>
      {icon && <span>{icon}</span>}
      <h2>{text}</h2>
    </TagContent>
  );
}
