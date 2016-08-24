import React from 'react';
import Button from './common/Button';

/**
 * フッタークラスです。
 */
export default class Footer extends React.Component {

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
      <div className="footer">
        <Button className="save" text="保存" />
      </div>
    );
  }

}
