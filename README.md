# Chat.io for React

This is a React component to easily add [chat.io widget](https://www.chat.io/) to your application.

## Getting Started

### Prerequisites

To use chat.io in your React application, you will need a chat.io license ID. 

If you already have a chat.io account, get your **license_id** [here](https://app.chat.io/settings/channel-website).

![Chat.io license ID](https://raw.githubusercontent.com/livechat/react-chatio/master/chatio_license.png)

If you don't have an account, you can create one [here](https://www.chat.io/).

### Installation

To import chat.io for React, run the following command:

```javascript
npm install react-chatio --save
```

### User guide

### Start

Having imported chat.io for React, put it in your render method:

```javascript
import ChatIO from 'react-chatio'

...

<ChatIO license={your_license_id} />
```

### Customization

You can change the look and feel of your chat widget in [Chat window customization](https://app.chat.io/settings/chat-window-customization) section.

### Methods

To begin with, get your chat reference using `onChatLoaded` callback:

```javascript
<ChatIO 
  onChatLoaded={ ref => this.chatio = ref }
  license={your_license_id} 
/>
```

With this reference you can, for example, hide the chat window:

```javascript
this.chatio.hide_chat_window();
// is the same as:
window.CHAT_API.hide_chat_window();
```

#### Available methods

|Name|Note|
|---|---|
| close_chat | Closes the ongoing chat. |
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

Chat.io React component gives you the option to control chat callbacks.

Let's say that you want to get notified when a user opens the chat:

```javascript
<ChatIO
  ...
  onChatWindowOpened={ () => console.log('Chat opened') } 
/>
```

#### Available callbacks

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

