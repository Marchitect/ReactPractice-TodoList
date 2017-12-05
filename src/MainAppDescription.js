import React from 'react';

export class MainAppDescription extends React.Component {


  render() {

    var lang = this.props.lang;
    //console.log('in display ' + lang);
    let desc = null;
    if (lang === "Mandarin") {
      //console.log('props is Mandarin');
      desc = <div><h1>轻松添加和删除你的代办事项或需要购买的物品。</h1>
      <h2>单击已创建事项来删除该事项。刷新页面清除所有事项。</h2></div>;
    } else {
      desc = <div><h1>Add and delete your todo tasks or shopping items with ease. </h1>
      <h2>Single tap to delete a task. Refreshing the page will remove all tasks :p</h2></div>;
      //console.log('props is English');
    }
    return (
      <div>
      {desc}
      </div>
    );
  }
}