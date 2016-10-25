import React from 'react';
import {_} from 'lodash';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

/**
 * プレビュークラスです。
 */
export default class Preview extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });

    this.state = {
      entryData: props.entryData
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      entryData: nextProps.entryData
    }, this._onChangeContent);
  }

  /**
   * 記事内容が書き換わった際のハンドラーです。
   */
  _onChangeContent() {
    let dom = document.getElementById('preview');
    dom.innerHTML = marked(this.state.entryData.content);
    let preview = document.getElementById('preview');
    let codeItems = preview.getElementsByTagName('code');
    _.each(codeItems, (item) => {
      hljs.highlightBlock(item);
    });
  }

  /**
   * 描画します。
   */
  render() {
    return (
      <div className="preview" id="preview">
      </div>
    );
  }
}
