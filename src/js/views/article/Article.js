import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Button from '../common/Button';

/**
 * 記事クラス
 */
export default class Article extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      content:  ""
    };

    this._onChange = this._onChange.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="article">
        <div className="main">
          <Editor content={this.state.content} onChange={this._onChange} />
          <Preview content={this.state.content}/>
        </div>
        <div className="footer">
          <Button className="save" text="保存" />
        </div>
      </div>
    );
  }

  /**
   * 記事内容変更時のハンドラーです。
   */
  _onChange(value) {
    this.setState({
      content: value
    });
  }
}
