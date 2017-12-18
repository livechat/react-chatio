# React Chat.io

React component to integrate your application with Chat.io easily ;)

*You can start your 14 days free trial [here](https://www.chat.io/).*

### Pre requirements:

To use Chat.io in your application you need **license_id**. 

You get one after creating account on our [website](https://www.chat.io/).

You can check your **license_id** anytime [here](https://app.chat.io/settings/channel-website).

*If you have difficulties finding your **license_id** please take a look at this [screenshot](https://github.com/livechat/react-chatio/blob/master/chatio_license.png).*

### Installation
All you have to do:
```javascript
npm install react-chatio --save
```

### Usage

Usage is very simple:

*Import ChatIO component and put it in your render method:*
```javascript
import ChatIO from 'react-chatio'

...

<ChatIO license={your_license_id} />
```

*You can change chat appearance [here](https://app.chat.io/settings/chat-window-customization)*.

### Methods

To begin with, you want to get your chat reference using **onChatLoaded** callback.

*Example:*
```javascript
<ChatIO 
  onChatLoaded={ ref => this.chatio = ref }
  license={your_license_id} 
/>
```

Using this reference you can for example hide chat window:

*Example:*
```javascript
this.chatio.hide_chat_window();
// is same as:
window.CHAT_API.hide_chat_window();
```

*Table of all available methods:*

|Name|Note|
|---|---|
| close_chat | Closes an ongoing chat. |
| disable_sounds | Mutes all sounds in the chat window on visitor's side (not supported with the pop-up chat window). |
| open_chat_window | Maximizes the chat window (when using the embedded chat window) or opens the chat window (when using the pop-up window).|
| minimize_chat_window | Minimizes the chat window (not supported with the pop-up chat window). |
| hide_chat_window | Hides the chat window (not supported with the pop-up chat window). |
| agents_are_available | Returns true if your agents are available to chat, otherwise it returns false.|
| chat_window_maximized | Returns true if the chat window is maximized, returns false otherwise.|
|chat_window_minimized | Returns true if the chat window is minimized, returns false otherwise. |
| chat_window_hidden | Returns true if the chat window is hidden, returns false otherwise. |
| visitor_queued | Returns true if the visitor is currently waiting in the queue, returns false otherwise. |
|chat_running | Returns true if the visitor is currently chatting with an agent, returns false otherwise. |


### Callbacks
*To make your code cleaner and life easier our component gives you easy way to control chat callbacks.*

Lets say you want to get notified when user opens the chat:
```javascript
<ChatIO
  ...
  onChatWindowOpened={ () => console.log('Chat opened') } 
/>
```

*Table of all available callbacks:*

|Name|Note|
|---|---|
| onChatLoaded  | Executed when CHAT_API object is loaded and ready to use. **Returns reference to your CHAT_API object.** |
| onBeforeLoad  |  Executed before the chat window has been rendered (not supported with the pop-up chat window). |
| onAfterLoad  |  Executed right after the chat window has been rendered (not supported with the pop-up chat window).|
| onChatWindowOpened |  Executed when the chat window is opened. |
| onChatWindowMinimized |  Executed when the chat window is minimized (not supported with the pop-up chat window). |
| onChatWindowHidden |  Executed when the chat window is hidden (not supported with the pop-up chat window). |
| onChatStarted  | Executed when the chat is started.  |
| onChatEnded  |  Executed when the chat is ended. |

### Support
In case of any problem you can chat with us [here](https://www.chat.io/live-chat-guide/).

**I hope you will find this module useful. Happy Coding :)**

