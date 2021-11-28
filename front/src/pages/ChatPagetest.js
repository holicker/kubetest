import React from "react";
import SockJsClient from "react-stomp";
import UsernameGenerator from "username-generator";
import Fetch from "json-fetch";
import TalkBox from "../lib/chat/src/TalkBox";
import randomstring from "randomstring";

class ChatPage extends React.Component {
  constructor(props) {
    super(props);
    // randomUserId is used to emulate a unique user id for this demo usage
    this.randomUserName = UsernameGenerator.generateUsername("-");
    this.randomUserId = randomstring.generate();
    this.sendURL = "/message";
    this.state = {
      clientConnected: false,
      messages: [],
    };

  }

  onMessageReceive = (msg, topic) => {
    // alert(
    //   JSON.stringify(msg) +
    //     " @ " +
    //     JSON.stringify(this.state.messages) +
    //     " @ " +
    //     JSON.stringify(topic)
    // );
    const convertedMsg = {
      author: msg.writer,
      message: msg.message,
      timestamp: msg.chattedTime, // 이건 나중에 자바스크립트 date타입으로 변환하면 뜰 듯.
    };
    this.setState((prevState) => ({
      messages: [...prevState.messages, convertedMsg],
    }));
  };

  sendMessage = (msg, selfMsg) => {
    try {
      var send_message = {
        roomId: 3,
        writer: selfMsg.author,
        message: selfMsg.message,
        timestamp: null,
      };
      this.clientRef.sendMessage("/app/message", JSON.stringify(send_message));
      return true;
    } catch (e) {
      return false;
    }
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentWillMount() {
    Fetch("/history/3", {
      method: "GET",
    }).then((response) => {
      const convertedBody = [];
      response.body.map((messages) => {
        let jsonMessage = {
          //roomId:messages.roomdId,
          author: messages.writer,
          message: messages.message,
          timestamp: messages.chattedTime,
        };
        convertedBody.push(jsonMessage);
      });
      console.log(`convertedBody : ${JSON.stringify(convertedBody)}`);
      this.setState({ messages: convertedBody });
    });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    const wsSourceUrl = "https://localhost:8443/chatting";
    return (
      <div
        ref={(el) => {
          this.messagesEnd = el;
        }}
      >
        <TalkBox
          topic="이건 걍 바꿔도 대나바"
          currentUserId={this.randomUserId}
          currentUser={this.randomUserName}
          messages={this.state.messages}
          onSendMessage={this.sendMessage}
          connected={this.state.clientConnected}
        />

        <SockJsClient
          url={wsSourceUrl}
          topics={["/topic/public"]}
          onMessage={this.onMessageReceive}
          ref={(client) => {
            this.clientRef = client;
          }}
          onConnect={() => {
            this.setState({ clientConnected: true });
          }}
          onDisconnect={() => {
            this.setState({ clientConnected: false });
          }}
          debug={false}
          style={[{ width: "100%", height: "100%" }]}
        />
      </div>
    );
  }
}
export default ChatPage;
