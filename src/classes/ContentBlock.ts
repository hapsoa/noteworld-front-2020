import ContentBlockInterface from "../interfaces/ContentBlockInterface";
import { v4 as uuidv4 } from "uuid";

abstract class ContentBlock implements ContentBlockInterface {
  public id: string = "";
  public keyword: string = "";

  constructor() {
    this.id = uuidv4();
  }

  /**
   * save the content
   */
  public abstract save(): void;
  delete(): void {
    throw new Error("Method not implemented.");
  }
  duplicate(): void {
    throw new Error("Method not implemented.");
  }
}

export default ContentBlock;
