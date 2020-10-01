import React, { KeyboardEvent, ReactElement } from "react";
import "./PageView.scss";
import { HiOutlineDocument } from "react-icons/hi";
import PageBlock from "../../classes/PageBlock";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

interface TextListProps {
  contentBlockIds: string[];

  enterTextBlock(
    // eslint-disable-next-line no-unused-vars
    currentTextBlockId: string,
    // eslint-disable-next-line no-unused-vars
    event: KeyboardEvent<HTMLDivElement>
  ): void;
}

class TextElementList extends React.Component<TextListProps> {
  constructor(props: TextListProps) {
    super(props);
    this.state = {};
  }

  render() {
    const divElements = _.map(this.props.contentBlockIds, (blockId) => (
      <div
        contentEditable={true}
        className="text-component"
        style={{ flex: 2, border: "none" }}
        placeholder="Type '/' for commands"
        key={blockId}
        onKeyUp={(event) => this.props.enterTextBlock(blockId, event)}
        onFocus={() => {
          console.log("focus");
        }}
        onBlur={() => {
          console.log("onBlur");
        }}
      ></div>
    ));

    return <div>{divElements}</div>;
  }
}

class PageView extends React.Component<
  {},
  { pageBlock: PageBlock; contentBlockJsxElements: ReactElement[] }
> {
  constructor(props: {}) {
    super(props);

    // I want to insert page class instance in the PageView.
    const pageBlock: PageBlock = new PageBlock();

    const contentBlockJsxElements: ReactElement[] = _.map(
      pageBlock.contentBlockIds,
      (blockId) => {
        return (
          <div
            key={blockId}
            style={{
              margin: "4px 0",
            }}
          >
            {blockId}
          </div>
        );
      }
    );

    this.state = { pageBlock: pageBlock, contentBlockJsxElements };

    this.enterTextBlock = this.enterTextBlock.bind(this);
  }

  enterTextBlock(
    currentTextBlockId: string,
    event: KeyboardEvent<HTMLDivElement>
  ) {
    console.log("enterBlock()", event.key);

    if (event.key === "Enter") {
      console.log("success enter");
      // dont' apply enter at the current div.
      // contentBlockJsxElements[0];

      // find the current index
      const currentIndex = this.state.pageBlock.contentBlockIds.indexOf(
        currentTextBlockId
      );

      // make new TextComponent
      this.state.pageBlock.contentBlockIds.splice(
        currentIndex + 1,
        0,
        uuidv4()
      );

      this.setState({ pageBlock: this.state.pageBlock });

      // focus on the new TextComponent
    }
  }

  render() {
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
            <TextElementList
              contentBlockIds={this.state.pageBlock.contentBlockIds}
              enterTextBlock={this.enterTextBlock}
            />
          </div>
          <div style={{ flex: 2 }}></div>
        </div>
      </div>
    );
  }
}

export default PageView;
