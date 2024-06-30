import EditorView from '../../editor/view/EditorView';
import Editor from '../../editor';
import Modal from '../../modal_dialog/model/Modal';
import { CommandObject } from './CommandAbstract';

export default {
  run(ed) {
    ed.Modal.open({
      title: 'Ai Chat',
      content: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #ffffff; display: flex; flex-direction: column; align-items: center;">
            <button class="chat-button" onclick="toggleChat()" style="background-color: #7b79ff !important; color: white; border: none; border-radius: 50px; padding: 10px 20px; cursor: pointer; font-size: 16px;">Chat with Ai</button>
  
            <div class="chat-popup" id="chat-popup" style="display: none; margin-top: 20px; border: 1px solid #7b79ff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); width: 100%; max-width: 400px; background-color: white;">
              <div class="chat-header" style="background-color: #7b79ff; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">AI Assistant Chat</div>
              <div class="chat-body" id="chat-body" style="padding: 10px; max-height: 300px; overflow-y: auto;"></div>
              <div class="chat-footer" style="padding: 10px;">
                <input type="text" id="query" placeholder="Type your message..." required style="width: calc(100% - 20px); padding: 10px; border: 1px solid #ccc; border-radius: 5px;" />
                <button onclick="sendMessage()" style="background-color: #7b79ff !important; color: white; border: none; border-radius: 5px; padding: 10px; margin-top: 10px; width: 100%; cursor: pointer;">Send</button>
              </div>
            </div>
          </div>`,
      script: '',
    }).onceClose(() => {
      this.stopCommand();
    });
  },
} as CommandObject;
