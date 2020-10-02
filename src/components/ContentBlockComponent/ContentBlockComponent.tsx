/* eslint-disable no-unused-vars */
import React, { KeyboardEvent } from "react";
import ContentBlock from "../../classes/ContentBlock";
import TextBlock from "../../classes/TextBlock";
import "./ContentBlockComponent.scss";

interface ContentBlockComponentProps {
  contentBlock: ContentBlock;

  pressKeyOnTextBlock(
    currentTextBlock: TextBlock,
    event: KeyboardEvent<HTMLDivElement>
  ): void;
  handleFocusBlur(): void;
}

class ContentBlockComponent extends React.Component<
  ContentBlockComponentProps
> {
  private textBlockJsxElementRef: React.RefObject<HTMLDivElement>;

  constructor(props: ContentBlockComponentProps) {
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
        onKeyDown={(event) => {
          this.props.pressKeyOnTextBlock(
            this.props.contentBlock as TextBlock,
            event
          );
        }}
        ref={this.textBlockJsxElementRef}
      ></div>
    );

    return textBlockJsxElement;
  }

  focusThisTextBlock() {
    if (this.textBlockJsxElementRef.current) {
      this.textBlockJsxElementRef.current.focus();
    }
  }
}

export default ContentBlockComponent;
