import PageBlockInterface from "../interfaces/PageBlockInterface";
import ContentBlock from "./ContentBlock";
import TextBlock from "./TextBlock";
// import { v4 as uuidv4 } from "uuid";

class PageBlock extends ContentBlock implements PageBlockInterface {
  public title: string = "";
  public contentBlockIds: string[] = [];
  private contentBlocks: ContentBlock[] = [];

  public constructor() {
    super();

    // TODO 1 contentBlockId for test
    const newTextBlock = new TextBlock();
    this.contentBlockIds.push(newTextBlock.id);
    this.contentBlocks.push(newTextBlock);
  }

  public getContentBlocks() {
    if (this.contentBlocks.length === 0) {
      // TODO get contentBlocks from server

      return this.contentBlocks;
    } else {
      return this.contentBlocks;
    }
  }
}

export default PageBlock;
