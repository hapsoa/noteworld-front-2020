import React, { KeyboardEvent, ReactElement } from "react";
import "./PageView.scss";
import { HiOutlineDocument } from "react-icons/hi";
import Page from "../../classes/Page";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

// const contentBlockJsxElements: ReactElement<any, "div">[] = _.map(
//   page.contentBlockIds,
//   (blockId) => {
//     return (
//       <div
//         key={blockId}
//         style={{
//           margin: "4px 0",
//         }}
//       >
//         {blockId}
//       </div>
//     );
//   }
// );

// function enterTextBlock(event: KeyboardEvent<HTMLDivElement>) {
//   console.log("enterBlock()", event.key);

//   if (event.key === "Enter") {
//     console.log("success enter");
//     // dont' apply enter at the current div.
//     contentBlockJsxElements[0];

//     // make new TextComponent
//     page.contentBlockIds.push("content-block-id-3");

//     // focus on the new TextComponent
//   }
// }

interface TextListProps {
  contentBlockIds: string[];
  // eslint-disable-next-line no-unused-vars
  enterTextBlock(event: KeyboardEvent<HTMLDivElement>): void;
}

class TextElementList extends React.Component<TextListProps> {
  constructor(props: TextListProps) {
    super(props);
  }

  render() {
    const divElements = _.map(this.props.contentBlockIds, (blockId) => (
      // <div key={blockId}>{blockId}</div>
      <div
        contentEditable={true}
        className="text-component"
        style={{ flex: 2, border: "none" }}
        placeholder="Type '/' for commands"
        key={blockId}
        onKeyUp={this.props.enterTextBlock}
      ></div>
    ));

    return <div>{divElements}</div>;
  }
}

class PageView extends React.Component<
  {},
  { page: Page; contentBlockJsxElements: ReactElement[] }
> {
  constructor(props: {}) {
    super(props);

    // I want to insert page class instance in the PageView.
    const page: Page = new Page();

    const contentBlockJsxElements: ReactElement[] = _.map(
      page.contentBlockIds,
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

    this.state = { page, contentBlockJsxElements };

    this.enterTextBlock = this.enterTextBlock.bind(this);
  }

  enterTextBlock(event: KeyboardEvent<HTMLDivElement>) {
    console.log("enterBlock()", event.key);

    if (event.key === "Enter") {
      console.log("success enter");
      // dont' apply enter at the current div.
      // contentBlockJsxElements[0];

      // make new TextComponent
      this.state.page.contentBlockIds.push(uuidv4());
      this.setState({ page: this.state.page });

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
            <div
              contentEditable={true}
              className="text-component"
              style={{ flex: 2, border: "none" }}
              placeholder="Type '/' for commands"
              onKeyUp={(event) => {
                this.enterTextBlock(event);
              }}
            ></div>
            <TextElementList
              contentBlockIds={this.state.page.contentBlockIds}
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
