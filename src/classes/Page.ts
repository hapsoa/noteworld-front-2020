import PageInterface from "../interfaces/PageInterface";
import ContentBlock from "./ContentBlock";

class Page extends ContentBlock implements PageInterface {
  title: string;
  contentBlockIds: string[];

  public constructor() {
    super();
    this.title = "";
    this.contentBlockIds = [];
  }
}

export default Page;
