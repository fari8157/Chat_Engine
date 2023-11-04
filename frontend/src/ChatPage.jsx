import {PrettyChatWindow } from 'react-chat-engine-pretty'
// ChatPage.jsx
const ChatsPage = (props) => {
   
    return(
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
            projectId={process.env.PROJECT_ID}
            username={props.user.username}
            secret={props.user.secret}
            style={
                {height:'100%'}
            }/> 
        </div>
    )
  };
  
  export default ChatsPage; // Default export
  