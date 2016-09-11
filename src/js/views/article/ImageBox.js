import React from 'react';
import ApiParam from '../../enum/ApiParam';

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
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <li className="imageBox">
        <img src={ApiParam.getImagePath() + this.props.data.path} alt="" />
      </li>
    );
  }

}
