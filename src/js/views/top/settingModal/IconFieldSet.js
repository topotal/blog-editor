import React from 'react';
import FieldSet from '../../common/form/FieldSet';
import ApiParam from '../../../enum/ApiParam';
import SaveUserService from '../../../services/SaveUserService';

/**
 * アイコン変更フィールドセット
 */
export default class IconFieldSet extends React.Component {

  /**
   * コンストラクター
   * @constructor
   */
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
    this._onLoadFile = this._onLoadFile.bind(this);
    this._onChangeFile = this._onChangeFile.bind(this);
    this._onSuccessSaveUser = this._onSuccessSaveUser.bind(this);

    // 見えないファイル選択inputを作成
    this._inputFile = document.createElement('input');
    this._inputFile.type = 'file';
    this._inputFile.addEventListener('change', this._onChangeFile);

    // ファイルリーダー
    this._fileReader = new FileReader();
    this._fileReader.addEventListener('load', this._onLoadFile);

    // ユーザー情報更新サービス
    this._saveUserService = new SaveUserService();
    this._saveUserService.addEventListener('success', this._onSuccessSaveUser);

    this.state = {
      userData: this.props.userData
    };
  }

  /**
   * propが変更された際のハンドラー
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      userData: nextProps.userData
    });
  }

  /**
   * 描画します。
   */
  render() {
    let iconUrl = ApiParam.getImagePath() + this.state.userData.iconImageUrl;
    return (
      <FieldSet legend="Icon" className="iconFieldSet">
        <img className="iconFieldSet_img" src={iconUrl} width="50" height="50" />
        <div className="roundButton" onClick={this._onClick}>
          画像を選択
        </div>
      </FieldSet>
    );
  }

  /**
   * ファイル選択ボタン押下時のハンドラーです。
   */
  _onClick() {
    // マウスクリックイベントを発火
    let evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click');
    this._inputFile.dispatchEvent(evt);
  }

  /**
   * 画像ファイル選択時のハンドラーです。
   */
  _onChangeFile(event) {
    // ファイルリストを取得
    let fileList = this._inputFile.files;
    // ファイルをデータURIとして読み込む
    this._fileReader.readAsDataURL(fileList[0]) ;
  }

  /**
   * ファイルのロード完了時のハンドラーです。
   */
  _onLoadFile(event) {
    let result = this._fileReader.result;
    let userData = this.state.userData;
    userData.content = result;
    this._saveUserService.send(userData);
  }

  /**
   * 保存完了時のハンドラーです。
   */
  _onSuccessSaveUser() {
    console.info("success");
  }
}
