import TextBlockInterface from "../interfaces/TextBlockInterface";
import ContentBlock from "./ContentBlock";

class TextBlock extends ContentBlock implements TextBlockInterface {
  public content: string = "";
}

export default TextBlock;
