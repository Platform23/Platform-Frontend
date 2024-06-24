import React, { useState } from 'react';
import MessageList from "./MessageList";
import EmojiPicker from 'emoji-picker-react';
import InputEmoji from 'react-input-emoji'

const Chat = () => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    // const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const onEmojiClick = (emojiObject) => {
        setInputValue(prevInputValue => prevInputValue + emojiObject.emoji);
        // setSelectedEmoji(emojiObject);
        setShowEmojiPicker(false); // Close the picker after selecting an emoji
    };

    const [ text, setText ] = useState('')
  
      function handleOnEnter (text) {
        console.log('enter', text)
      }

    return (
        <div className="flex-1 flex flex-col h-screen p-4">
            <MessageList
                messages={fakeMessages}
            />

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

                    {/* Text input section*/}
                    <InputEmoji
                        value={text}
                        onChange={setText}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        shouldReturn
                        color='grey'
                        className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-100 rounded-md py-3" 
                        placeholder="Entrer votre message"
                    />
                    
                    {/* Send messge button */}
                    <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-primary hover:bg-bg-gray-700 focus:outline-none">
                        <span className="font-bold">Send</span>
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

const fakeMessages = [
    {
        id: 1,
        type: 'text',
        sender: {
            name: 'Alice',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:30 AM',
        text: 'Good morning, everyone!'
    },
    {
        id: 2,
        type: 'image',
        sender: {
            name: 'Bob',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:35 AM',
        imageUrl: 'https://img.freepik.com/photos-gratuite/tir-interieur-jolie-fille-peau-propre-sourire-parfait-s-amusant-au-cafe_273609-9039.jpg?w=740',
        text: 'Check out this beautiful sunset!'
    },
    {
        id: 3,
        type: 'text',
        sender: {
            name: 'Charlie',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:40 AM',
        text: 'Did you see the news today?'
    },
    {
        id: 4,
        type: 'file',
        sender: {
            name: 'Alice',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:45 AM',
        fileName: 'report.pdf',
        fileSize: '1.2 MB',
        fileType: 'PDF'
    },
    {
        id: 5,
        type: 'text',
        sender: {
            name: 'David',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:50 AM',
        text: 'Let’s schedule a meeting for later.'
    },
    {
        id: 6,
        type: 'image',
        sender: {
            name: 'Eve',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '10:55 AM',
        imageUrl: 'https://img.freepik.com/photos-gratuite/tir-interieur-jolie-fille-peau-propre-sourire-parfait-s-amusant-au-cafe_273609-9039.jpg?w=740',
        text: 'Look at this amazing cake I made!'
    },
    {
        id: 7,
        type: 'file',
        sender: {
            name: 'Bob',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '11:00 AM',
        fileName: 'presentation.pptx',
        fileSize: '4.5 MB',
        fileType: 'PPTX'
    },
    {
        id: 8,
        type: 'text',
        sender: {
            name: 'Charlie',
            profilePicture: 'https://plus.unsplash.com/premium_photo-1712736395861-afdf82d22fb6?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        time: '11:05 AM',
        text: 'Can someone help me with this code issue?'
    },
];