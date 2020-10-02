/* eslint-disable no-unused-vars */
import React, { KeyboardEvent } from "react";
import "./PageView.scss";
import { HiOutlineDocument } from "react-icons/hi";
import PageBlock from "../../classes/PageBlock";
import _ from "lodash";
import TextBlock from "../../classes/TextBlock";
import ContentBlockComponent from "../ContentBlockComponent/ContentBlockComponent";

class PageView extends React.Component<
  {},
  {
    pageBlock: PageBlock;
    focusedTextBlock: TextBlock | null;
  }
> {
  private focusedContentBlockJsxElementRef: React.RefObject<
    ContentBlockComponent
  > = React.createRef<ContentBlockComponent>();
  private eventKey: string = "";

  constructor(props: {}) {
    super(props);

    const pageBlock: PageBlock = new PageBlock();

    this.state = {
      pageBlock,
      focusedTextBlock: null,
    };

    this.pressKeyOnTextBlock = this.pressKeyOnTextBlock.bind(this);
    this.handleFocusBlur = this.handleFocusBlur.bind(this);
  }

  pressKeyOnTextBlock(
    currentTextBlock: TextBlock,
    event: KeyboardEvent<HTMLDivElement>
  ) {
    // @ts-ignore
    currentTextBlock.content = event.target.textContent;
    this.eventKey = event.key;

    // find the current index
    const currentIndex = this.state.pageBlock.contentBlockIds.indexOf(
      currentTextBlock.id
    );

    if (this.eventKey === "Enter") {
      // dont' apply enter at the current TextBlock.
      event.preventDefault();

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
        focusedTextBlock: newTextBlock,
      });
    } else if (this.eventKey === "ArrowUp") {
      console.log("ArrowUP", this.state.pageBlock.getContentBlocks());
      this.setState({
        pageBlock: this.state.pageBlock,
      });
      // move focus to previous TextBlock
      if (currentIndex > 0) {
        const focusedTextBlock = this.state.pageBlock.getContentBlocks()[
          currentIndex - 1
        ] as TextBlock;
        this.setState({
          focusedTextBlock,
        });
      }
    } else if (this.eventKey === "ArrowDown") {
      console.log("ArrowDown", this.state.pageBlock.getContentBlocks());
      this.setState({
        pageBlock: this.state.pageBlock,
      });
      // move focus to next TextBlock
      if (currentIndex < this.state.pageBlock.getContentBlocks().length - 1) {
        const focusedTextBlock = this.state.pageBlock.getContentBlocks()[
          currentIndex + 1
        ] as TextBlock;
        this.setState({
          focusedTextBlock,
        });
      }
    } else if (event.metaKey && this.eventKey === "s") {
      event.preventDefault();
      currentTextBlock.save();
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
    if (
      this.focusedContentBlockJsxElementRef.current &&
      (this.eventKey === "Enter" ||
        this.eventKey === "ArrowUp" ||
        this.eventKey === "ArrowDown")
    ) {
      this.focusedContentBlockJsxElementRef.current.focusThisTextBlock();
      this.eventKey = "";
    }
  }

  handleFocusBlur() {
    this.setState({ pageBlock: this.state.pageBlock });
  }

  render() {
    const contentBlocks = this.state.pageBlock.getContentBlocks();
    const contentBlockElementList = _.map(contentBlocks, (contentBlock) => (
      <ContentBlockComponent
        contentBlock={contentBlock}
        pressKeyOnTextBlock={this.pressKeyOnTextBlock}
        handleFocusBlur={this.handleFocusBlur}
        key={contentBlock.id}
        ref={(() => {
          if (
            this.state.focusedTextBlock &&
            this.state.focusedTextBlock.id === contentBlock.id
          ) {
            return this.focusedContentBlockJsxElementRef;
          } else {
            return null;
          }
        })()}
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
