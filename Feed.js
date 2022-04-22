import React, {useState, useEffect} from 'react';
import './feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';
import TodayIcon from '@mui/icons-material/Today';
import Post from './Post';
import {db} from './firebase';
import firebase from 'firebase'


function Feed() {;
  const [input, setInput] = useState("")
const[posts, setPosts] = useState([]);

useEffect(()=>{
db.collection("posts")
.orderBy('timeStamp', 'desc' )
.onSnapshot((snapshot) =>setPosts(snapshot.docs.map((doc) => (
  {
    id:doc.id,
    data:doc.data(),
  }
))) )
}, []);
const sendPost = (e) => {
  e.preventDefault();
  db.collection('posts').add({
    name:"Muhire Ighor",
    description:"This is a test",
    message:input,
    photoUrl:'',
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),

 
  });

  setInput("");
};
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
          <div className="feed__input">
              <CreateIcon />     
              <form action="#" method='post'>
                  <input value={input} onchange={e => setInput(e.target.value)} type="text" />
                  <button onClick={sendPost} type='submit'>Send</button>
              </form>
          </div>
<div className="input__feedOptions">
   <InputOption Icon={ImageIcon} title='photo' color="#7085F9" />
   <InputOption Icon={SubscriptionsSharpIcon} title='Video' color="#E7A33E" />
   <InputOption Icon={DateRangeSharpIcon} title='Event' color="#C0CBCD" />
   <InputOption Icon={TodayIcon} title='Write article' color="#7FC15E" />
</div>

      </div>
      {posts.map(({id, data: {name, description, message, photoUrl }})=>{
        <Post 
        key={id}
        name={name} 
        description={description} 
        message={message}
        photoUrl={photoUrl} />
      })}

     
    </div>

  )
};

export default Feed;
