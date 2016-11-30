import React from 'react';
import classNames from 'classnames';
import ApiParam from '../../../enum/ApiParam';

/**
 * 画像ボックスクラスです。
 */
export default class ImageListCell extends React.Component {

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
    let classes = classNames('imageListCell', {
      selected: this.state.selected
    });
    return (
      <li className={classes} onClick={this._onClick}>
        <img className="imageListCell_icon" src={ApiParam.getImagePath() + this.props.data.url} alt=""/>
        {this._getCheck()}
      </li>
    );
  }

  /**
   * チェックマークを取得します。
   */
  _getCheck() {
    if(this.state.selected) {
      return (
        <i className="imageListCell_check fa fa-check-circle fa-fw"></i>
      );
    }
    return null;
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClick() {
    this.props.onClick(this.props.data);
  }
}
