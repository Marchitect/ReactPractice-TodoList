import React from 'react';

export class RenderSubmitButton extends React.Component {


  render() {

    var lang = this.props.lang;
    let PandB = null;
    if (lang === "Mandarin") {
      PandB = <button type="submit">添加</button>;
    } else {
      PandB = <button type="submit">Add</button>;
    }
    return (
      <div className="buttonContainer">
      {PandB}
      </div>
    );
  }
}

export default RenderSubmitButton;