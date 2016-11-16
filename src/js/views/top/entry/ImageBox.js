import React from 'react';
import classNames from 'classnames';
import ApiParam from '../../../enum/ApiParam';

/**
 * 画像ボックスクラスです。
 */
export default class ImageBox extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);

    this.state = {
      selected: this.props.selected
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected
    });
  }

  /**
   * 描画します。
   */
  render() {
    let classes = classNames('imageBox', {
      selected: this.state.selected
    });
    return (
      <li className={classes} onClick={this._onClick}>
        <img src={ApiParam.getImagePath() + this.props.data.url} alt=""/>
        <i className="check fa fa-check-circle fa-fw"></i>
      </li>
    );
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick() {
    this.props.onClick(this.props.data);
  }
}
