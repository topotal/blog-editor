import React from 'react';
import AsideItemData from '../../models/vo/AsideItemData';

/**
 * サイドバークラスです。
 */
export default class Aside extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClickItem = this._onClickItem.bind(this);
  }

  /**
   * 描画します。
   */
  render() {
    let items = AsideItemData.LIST.map((itemData, index) => {
      return (
        <li className="toolButton" onClick={this._onClickItem} key={index} data-type={itemData.type}>
          <i title={itemData.title} className={"fa " + itemData.icon + " fa-fw"} ></i>
        </li>
      );
    });

    return (
      <ul className="aside panel">
        {items}
      </ul>
    );
  }

  /**
   * クリック時のハンドラーです。
   */
  _onClickItem(event) {
    let target = event.currentTarget;
    // 変更イベントを発火
    this.props.onClick(target.dataset.type)
  }
}
