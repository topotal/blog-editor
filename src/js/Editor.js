import React from 'react';

/**
 * エディタークラスです。
 */
export default class Editor extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(prop) {
    super(prop);
  }

  /**
   * コンポーネントがマウントされた際のハンドラーです。
   */
  componentDidMount() {
    ace.edit("ace");
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="editor" id="ace">
      </div>
    );
  }
}
