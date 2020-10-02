/* eslint-disable no-unused-vars */
import React, { KeyboardEvent, ReactElement } from "react";
import "./PageView.scss";
import { HiOutlineDocument } from "react-icons/hi";
import PageBlock from "../../classes/PageBlock";
import _ from "lodash";
import ContentBlock from "../../classes/ContentBlock";
import TextBlock from "../../classes/TextBlock";

interface ContentBlockElementProps {
  contentBlock: ContentBlock;

  enterTextBlock(
    currentTextBlockId: string,
    event: KeyboardEvent<HTMLDivElement>
  ): void;
  handleFocusBlur(): void;
}

class ContentBlockJsxElement extends React.Component<ContentBlockElementProps> {
  private textBlockJsxElementRef: React.RefObject<HTMLDivElement>;

  constructor(props: ContentBlockElementProps) {
    super(props);
    this.state = {};
    this.textBlockJsxElementRef = React.createRef();
  }

  render() {
    const textBlockJsxElement = (
      <div
        contentEditable={true}
        className="text-component"
        style={{ flex: 2, border: "none" }}
        placeholder={
          (this.props.contentBlock as TextBlock).isFocus
            ? "Type '/' for commands"
            : ""
        }
        key={this.props.contentBlock.id}
        onFocus={() => {
          (this.props.contentBlock as TextBlock).isFocus = true;
          this.props.handleFocusBlur();
        }}
        onBlur={() => {
          (this.props.contentBlock as TextBlock).isFocus = false;
          this.props.handleFocusBlur();
        }}
        onKeyPress={(event) => {
          this.props.enterTextBlock(this.props.contentBlock.id, event);
        }}
        ref={this.textBlockJsxElementRef}
      ></div>
    );

    return textBlockJsxElement;
  }

  focus() {
    if (this.textBlockJsxElementRef.current) {
      this.textBlockJsxElementRef.current.focus();
    }
  }
}

class PageView extends React.Component<
  {},
  {
    pageBlock: PageBlock;
    newTextBlock: TextBlock;
  }
> {
  private newContentBlockJsxElementRef: React.RefObject<
    ContentBlockJsxElement
  > = React.createRef<ContentBlockJsxElement>();
  private eventKey: string = "";

  constructor(props: {}) {
    super(props);

    const pageBlock: PageBlock = new PageBlock();

    this.state = {
      pageBlock,
      // contentBlockJsxElements,
      newTextBlock: pageBlock.getContentBlocks()[0] as TextBlock,
    };

    this.enterTextBlock = this.enterTextBlock.bind(this);
    this.handleFocusBlur = this.handleFocusBlur.bind(this);
  }

  enterTextBlock(
    currentTextBlockId: string,
    event: KeyboardEvent<HTMLDivElement>
  ) {
    this.eventKey = event.key;
    if (event.key === "Enter") {
      // dont' apply enter at the current TextBlock.
      event.preventDefault();

      // find the current index
      const currentIndex = this.state.pageBlock.contentBlockIds.indexOf(
        currentTextBlockId
      );

      // make new TextBlock
      const newTextBlock = new TextBlock();
      this.state.pageBlock.contentBlockIds.splice(
        currentIndex + 1,
        0,
        newTextBlock.id
      );
      this.state.pageBlock
        .getContentBlocks()
        .splice(currentIndex + 1, 0, newTextBlock);

      // update state
      this.setState({
        pageBlock: this.state.pageBlock,
        newTextBlock,
      });
    }
  }

  componentDidUpdate() {
    if (
      this.newContentBlockJsxElementRef.current &&
      this.eventKey === "Enter"
    ) {
      this.newContentBlockJsxElementRef.current.focus();
      this.eventKey = "";
    }
  }

  handleFocusBlur() {
    this.setState({ pageBlock: this.state.pageBlock });
  }

  render() {
    const contentBlocks = this.state.pageBlock.getContentBlocks();
    const contentBlockElementList = _.map(contentBlocks, (contentBlock) => (
      <ContentBlockJsxElement
        contentBlock={contentBlock}
        enterTextBlock={this.enterTextBlock}
        handleFocusBlur={this.handleFocusBlur}
        key={contentBlock.id}
        ref={
          this.state.newTextBlock.id === contentBlock.id
            ? this.newContentBlockJsxElementRef
            : null
        }
      />
    ));

    return (
      <div className="PageView">
        <img
          src="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80"
          alt=""
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}></div>
          <div style={{ flex: 8 }}>
            <div style={{ fontSize: "48px", fontWeight: "bold" }}>title</div>
            <div style={{ margin: "4px 0" }}>
              I&apos;m gonna focus on my strengths that are warm heart, wisdom,
              brave, grit to make us happy together.
            </div>
            <div
              className="page-component"
              style={{
                margin: "4px 0",
              }}
            >
              <HiOutlineDocument />
              <div>PageComponent</div>
            </div>
            {contentBlockElementList}
          </div>
          <div style={{ flex: 2 }}></div>
        </div>
      </div>
    );
  }
}

export default PageView;
