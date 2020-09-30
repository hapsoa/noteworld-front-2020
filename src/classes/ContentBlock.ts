import ContentBlockInterface from "../interfaces/ContentBlockInterface";

abstract class ContentBlock implements ContentBlockInterface {
  id: string = "";
  keyword: string = "";
  delete(): void {
    throw new Error("Method not implemented.");
  }
  duplicate(): void {
    throw new Error("Method not implemented.");
  }
}

export default ContentBlock;
