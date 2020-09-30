interface ContentBlockInterface {
  id: string;
  keyword: string;

  delete(): void;
  duplicate(): void;
}

export default ContentBlockInterface;
