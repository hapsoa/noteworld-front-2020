import PageInterface from "../interfaces/PageInterface";
import ContentBlock from "./ContentBlock";

class Page extends ContentBlock implements PageInterface {
  title: string;
  contentBlocks: string[];

  public constructor() {
    super();
    this.title = "";
    this.contentBlocks = [];
  }
}

export default Page;
