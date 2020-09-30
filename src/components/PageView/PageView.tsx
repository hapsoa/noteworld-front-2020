import React from "react";
import "./PageView.scss";
import { HiOutlineDocument } from "react-icons/hi";
import Page from "../../classes/Page";
import _ from "lodash";

// I want to insert page class instance in the PageView.
const page: Page = new Page();
page.contentBlocks.push("content-block-id-1");
page.contentBlocks.push("content-block-id-2");

// const contentBlocksss = page.contentBlocks.map((blockId) => {
//   return <div key={blockId}>{blockId}</div>;
// });

const contentBlockJsxElements = _.map(page.contentBlocks, (blockId) => {
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
});

class PageView extends React.Component {
  constructor(props: React.Component<{}, {}>) {
    super(props);
    this.state = { asdf: "asdf" };
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
            {/* <div
              style={{
                margin: "4px 0",
              }}
            >
              {page.contentBlocks}
            </div> */}
            {contentBlockJsxElements}
          </div>
          <div style={{ flex: 2 }}></div>
        </div>
      </div>
    );
  }
}

export default PageView;
