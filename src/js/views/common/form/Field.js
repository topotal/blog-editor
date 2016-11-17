import React from 'react';

/**
 * フィールドのベースクラスです。
 */
export default class Field extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

    this.state = {
      value: this.props.value || null
    }
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="field">
        <span className="fieldLabel">{this.props.label}：</span>
        {this._createInput()}
      </div>
    );
  }

  /**
   * 入力フォームを生成します。
   * オーバーライドして使用します。
   */
  _createInput() {
    return (<input type="text" onChange={this._onChange}/>);
  }

  /**
   * 値の変更時のハンドラーです。
   */
  _onChange(event) {
    let value = event.target.value;
    this.setState({
      value: value
    });

    // 値の変更イベントを発火
    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }
}
