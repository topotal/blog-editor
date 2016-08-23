import React from 'react';
import Panel from './Panel';

/**
 * プレビュークラスです。
 */
export default class Preview extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="preview">プレビュー</div>
    );
  }
}
