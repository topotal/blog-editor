import React from 'react';
import classNames from 'classnames';

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
      value: this.props.value
    }
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value
    });
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('field', this.props.className);
    return (
      <div className={classes}>
        <span className="field_label">{this.props.label}：</span>
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
    this._dispatchChangeEvent(value);
  }

  /**
   * 値の変更イベントを発火します。
   */
  _dispatchChangeEvent(value) {
    if(this.props.onChange) {
      console.info(value);
      this.props.onChange({
        name: this.props.name,
        value: value
      });
    }
  }
}
