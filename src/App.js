import React from "react";
import "./App.scss";

const marked = require("marked");
marked.setOptions({
  gfm: true,
  breaks: true
});

const defaultText = `# Welcome to my Markdown previewer!
## Level 2 heading
### Level 3 heading

Markdown is great! You can bold text, _italicize it_, or ~~cross it out~~.

You can make text \`monospace\` or put it in a code block, like this:

\`\`\`
const greeting = () => {
  console.log('Hello, world!');
};
greeting();
\`\`\`

Carriage returns
render as a line break.

You can make lists, too:
* Eat
* Sleep
* Code
* Repeat

> Or use blockquotes, they're pretty neat!

You can [click here](https://en.wikipedia.org/wiki/Markdown) to read about this markup language on Wikipedia. Finally, here's the Markdown logo:
![Markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/800px-Markdown-mark.svg.png)
`;

const Preview = props => {
  return (
    <div id="preview-container" className="container">
      <header className="header">Preview</header>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: props.output }}
      ></div>
    </div>
  );
};

const Editor = props => {
  return (
    <div id="editor-container" className="container">
      <header className="header">Markdown</header>
      <textarea value={props.input} onChange={props.onChange} id="editor" />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div id="main">
        <Editor onChange={this.handleChange} input={this.state.input} />
        <Preview output={marked(this.state.input)} />
      </div>
    );
  }
}

export default App;
