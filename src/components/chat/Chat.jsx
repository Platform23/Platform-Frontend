import { useEffect, useState } from 'react';
import InputEmoji from 'react-input-emoji'
import ChatBubble from './ChatBubble';
import { Transmit } from '@adonisjs/transmit-client';
import { BASE_URL } from '../../utils/constants';

const Chat = ({ messages, setMessages, channel, handleSendMessage, deleteMessage }) => {
    const [messageData, setMessageData] = useState({
        content: '',
        network: channel,
    });

    useEffect(() => {
        const fetchData = async () => {
            const transmit = new Transmit({
                baseUrl: BASE_URL,
            });

            const subscription = transmit.subscription(`chats/${channel}/messages`);
            await subscription.create();

            subscription.onMessage((data) => {
                const parsedMessage = JSON.parse(data.message);
                setMessages((prevMessages) => [...prevMessages, parsedMessage]);
            });
        };

        fetchData();
    }, []);

    const handleChange = (content) => {
        setMessageData(prev => ({ ...prev, content }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (messageData.content.trim()) {
            await handleSendMessage(messageData);
            setMessageData(prev => ({ ...prev, content: '' }));
        }
    };

    const handleDeleteMessage = async (messageId) => {
        await deleteMessage(messageId);
        setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
    };

    return (
        <div className="flex-1 flex flex-col h-screen p-4">
            <div className="message-list flex flex-col gap-4 pb-24">
                {messages.map((message) => (
                    <ChatBubble
                        key={message.id}
                        sender={message.user}
                        time={message.createdAt}
                        message={message.content}
                        imageUrl={message.imagePath}
                        onDelete={() => handleDeleteMessage(message.id)}
                    />
                ))}
            </div>

            <div className="fixed bottom-0 px-1 pt-4 w-full pr-[34rem]">
                <div className="relative flex">

                    {/* Voice recorder icon buttton */}
                    {/* <span className="absolute inset-y-0 flex items-center">
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                            </svg>
                        </button>
                    </span> */}

                    {/* <input 
                        type="text" 
                        placeholder="Write your message!" 
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-100 rounded-md py-3" 
                        // value={selectedEmoji ? selectedEmoji.emoji : ''}  // Add the selected emoji input
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                    /> */}

                    <InputEmoji
                        value={messageData.content}
                        onChange={handleChange}
                        cleanOnEnter
                        onEnter={handleSubmit}
                        shouldReturn
                        color='grey'
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-100 rounded-md py-3"
                        placeholder="Entrer votre message"
                    />

                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-primary hover:bg-bg-gray-700 focus:outline-none">
                        <span className="font-bold">Envoyer</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                    </button>

                    <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                        {/* <button 
                            type="button" 
                            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                            </svg>
                        </button> */}

                        {/* Emoji icon button */}
                        {/* <button 
                            type="button" 
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;