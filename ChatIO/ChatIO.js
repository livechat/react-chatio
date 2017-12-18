import React from 'react';
import PropTypes from 'prop-types';

export default class ChatIO extends React.Component{
  componentWillMount(){
    this.loadLiveChatApi.bind(this)();
  }

  chatLoaded(){
    if (window.LC_API) {
      window.CHAT_API = window.LC_API;
      this.setCallbacks.bind(this)();
      if (typeof this.props.onChatLoaded === 'function') {
        this.props.onChatLoaded(window.CHAT_API);
      }
    }
  }

  chatNotLoaded(){
    if (typeof this.props.onChatLoaded === 'function') {
      this.props.onChatLoaded('error when loading');
    }
  }

  loadLiveChatApi() {
    if (!window.LC_API) {
      window.__lc = window.__lc || {};
      window.__lc.license = this.props.license;
      window['__chatio']=window['__chatio']||function(){(window['__chatio'].q=window['__chatio'].q||[]).push(window, document, 'script', '__chatio')};
      window['__chatio'].license = 9348640;
      window['__chatio'].d= +new Date();
      const lc = document.createElement('script');
      lc.type = 'text/javascript';
      lc.async = true;
      lc.src = 'https://cdn.chatio-static.com/widget/init/script.' + this.props.license + '.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(lc, s);
      lc.addEventListener('load', this.chatLoaded.bind(this));
      lc.addEventListener('error', this.chatNotLoaded.bind(this));
    }
  }

  render() {
    return null;
  }

  setCallbacks(){
    if (typeof this.props.onBeforeLoad === 'function')
      window.CHAT_API.on_before_load = this.props.onBeforeLoad.bind(this);

    if (typeof this.props.onAfterLoad === 'function')
      window.CHAT_API.on_after_load = this.props.onAfterLoad();

    if (typeof this.props.onChatWindowOpened === 'function')
      window.CHAT_API.on_chat_window_opened = this.props.onChatWindowOpened.bind(this);

    if (typeof this.props.onChatWindowMinimized === 'function')
      window.CHAT_API.on_chat_window_minimized = this.props.onChatWindowMinimized.bind(this);

    if (typeof this.props.onChatWindowHidden === 'function')
      window.CHAT_API.on_chat_window_hidden = this.props.onChatWindowHidden.bind(this);

    if (typeof this.props.onChatStateChanged === 'function')
      window.CHAT_API.on_chat_state_changed = this.props.onChatStateChanged.bind(this);

    if (typeof this.props.onChatStarted === 'function')
      window.CHAT_API.on_chat_started = this.props.onChatStarted.bind(this);

    if (typeof this.props.onChatEnded === 'function')
      window.CHAT_API.on_chat_ended = this.props.onChatEnded.bind(this);

    if (typeof this.props.onMessage === 'function')
      window.CHAT_API.on_message = this.props.onMessage.bind(this);

    if (typeof this.props.onTicketCreated === 'function')
      window.CHAT_API.on_ticket_created = this.props.onTicketCreated.bind(this);

    if (typeof this.props.onPrechatSurveySubmitted === 'function')
      window.CHAT_API.on_prechat_survey_submitted =  this.props.onPrechatSurveySubmitted.bind(this);

    if (typeof this.props.onRatingSubmitted === 'function')
      window.CHAT_API.on_rating_submitted =  this.props.onRatingSubmitted.bind(this);

    if (typeof this.props.onRatingCommentSubmitted === 'function')
      window.CHAT_API.on_rating_comment_submitted = this.props.onRatingCommentSubmitted.bind(this);
  }
}

ChatIO.propTypes = {
  // important
  license: PropTypes.number.isRequired,
  onChatLoaded: PropTypes.func,
  // less important
  onBeforeLoad: PropTypes.func,
  onAfterLoad: PropTypes.func,
  onChatWindowOpened: PropTypes.func,
  onChatWindowMinimized: PropTypes.func,
  onChatWindowHidden: PropTypes.func,
  onChatStateChanged: PropTypes.func,
  onChatStarted: PropTypes.func,
  onChatEnded: PropTypes.func,
  onMessage: PropTypes.func,
  onTicketCreated: PropTypes.func,
  onPrechatSurveySubmitted: PropTypes.func,
  onPostchatSurveySubmitted: PropTypes.func,
  onRatingSubmitted: PropTypes.func,
  onRatingCommentSubmitted: PropTypes.func,
};
