import React from 'react';

/**
 * コンボボックスクラスです。
 */
export default class ComboBox extends React.Component {

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
    var options = this.props.store.map((data, index) => {
      return (
        <option value={data[this.props.valueField]} key={index}>{data[this.props.displayField]}</option>
      );
    });

    return (
      <div className="field">
        <span className="fieldLabel">{this.props.label}：</span>
        <select className="fieldInput combobox mousetrap" onChange={this._onChange}>
          {options}
        </select>
      </div>
    );
  }

  /**
   * 値の変更時のハンドラーです。
   */
  _onChange(event) {
    let value = event.target.value;
    console.info(value);
    this.setState({
      value: value
    });

    // 値の変更イベントを発火
    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }
}
