import TextBlockInterface from "../interfaces/TextBlockInterface";
import ContentBlock from "./ContentBlock";

class TextBlock extends ContentBlock implements TextBlockInterface {
  public content: string = "";
  public isFocus: boolean = false;

  public constructor() {
    super();
  }
}

export default TextBlock;
