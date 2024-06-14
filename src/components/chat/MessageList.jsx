import ChatBubble from "./ChatBubble";
import FileBubble from "./FileBubble";

const MessageList = ({ messages }) => {
    return (
        <div className="message-list flex flex-col gap-4 pb-24">
            {messages.map((message) => {
                switch (message.type) {
                    case 'text':
                        return (
                            <ChatBubble
                                key={message.id}
                                type={message.type}
                                sender={message.sender}
                                time={message.time}
                                message={message.text}
                            />
                        );
                    case 'image':
                        return (
                            <ChatBubble
                                key={message.id}
                                type={message.type}
                                sender={message.sender}
                                time={message.time}
                                message={message.text}
                                imageUrl={message.imageUrl}
                            />
                        );
                    case 'file':
                        return (
                            <FileBubble
                                key={message.id}
                                sender={message.sender}
                                time={message.time}
                                fileName={message.fileName}
                                fileSize={message.fileSize}
                                fileType={message.fileType}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default MessageList;
