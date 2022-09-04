import React,{useEffect,useState} from 'react'
import axios from 'axios';

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    // console.log(chats);
    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat');
        setChats(data)
        // console.log(data);
    }

  useEffect(() => {
      fetchChats();
  }, []);

  return (
    <div>
          {chats.map((chat) => (
              <div key = {chat._id}>{chat.chatName}</div>
          ))}
          {/* hello */}
    </div>
  )
}

export default ChatPage
