import PageBlockInterface from "../interfaces/PageBlockInterface";
import ContentBlock from "./ContentBlock";
import TextBlock from "./TextBlock";
import { v4 as uuidv4 } from "uuid";

class PageBlock extends ContentBlock implements PageBlockInterface {
  public title: string = "";
  public contentBlockIds: string[] = [];
  private contentBlocks: ContentBlock[] = [];

  public constructor() {
    super();

    // TODO 1 contentBlockId for test
    this.contentBlockIds.push(uuidv4());
  }

  public getContentBlocks() {
    if (this.contentBlocks.length === 0) {
      // TODO get contentBlocks from server
      this.contentBlocks.push(new TextBlock());
      return this.contentBlocks;
    } else {
      return this.contentBlocks;
    }
  }
}

export default PageBlock;
