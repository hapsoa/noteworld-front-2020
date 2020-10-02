import TextBlockInterface from "../interfaces/TextBlockInterface";
import ContentBlock from "./ContentBlock";

class TextBlock extends ContentBlock implements TextBlockInterface {
  public content: string = "";
  public isFocus: boolean = false;

  public constructor() {
    super();
  }

  public save(): void {
    // dispatch data to server
    throw new Error("Method not implemented.");
    // server manage database
  }
}

export default TextBlock;
