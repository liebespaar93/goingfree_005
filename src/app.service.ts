import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    
    return (
    `
    <!doctype html>
    <html lang="ko">
    <head>
      <mata charset="utf-8">
    </head>
    <body>
      <div>
        <ul id="messages"></ul>
      </div>
      <div>
        <input id="message" type="text" />
        <button onclick="handleSendMSG()">submit</button>
      </div>


      <script src="https://cdn.socket.io/4.4.1/socket.io.js" ></script> 
      <script>
        const socket = io("http://localhost:3000");
                
        const message = document.getElementById('message');
        const messages = document.getElementById('messages');
        
        const handleSendMSG = () => {
          socket.emit('message', { data: message.value })
        };



        socket.on('rtc', ({ data }) => {
          
        })


        socket.on('message', ({ data }) => {
          handleNewMessage(data);
        });
        
        const handleNewMessage = ( message ) => {
          messages.appendChild(buildNewMessage(message));
        };
        
        const buildNewMessage = ( message ) => {
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(message));
          return li;
        }
      </script>
    </body>
    </html> 
    `
    );
  }
}
