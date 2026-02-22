<template>
  <div class="chatbot-root">
    <button
      class="chatbot-fab"
      :class="{ 'fab-open': isOpen }"
      @click.stop="toggleChat"
      type="button"
      title="Chat with Akilan's Portfolio Assistant"
    >
      <span>{{ isOpen ? '✕' : '💬' }}</span>
    </button>
    <transition name="chat-slide">
      <div v-if="isOpen" class="chatbot-window" @click.stop>
        <iframe
          src="/akilan-chatbot.html"
          class="chatbot-iframe"
          frameborder="0"
          title="AkilanFlix Portfolio Assistant"
        ></iframe>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class AkilanChatbot extends Vue {
  isOpen = false;
  toggleChat() { this.isOpen = !this.isOpen; }
}
</script>

<style>
.chatbot-root { position: fixed; bottom: 0; right: 0; z-index: 99999; pointer-events: none; }
.chatbot-fab {
  position: fixed; bottom: 28px; right: 28px; z-index: 99999;
  width: 60px; height: 60px; border-radius: 50%;
  background: #e50914; border: none;
  cursor: pointer !important; pointer-events: all !important;
  box-shadow: 0 4px 28px rgba(229,9,20,.6);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; transition: transform .2s, background .2s;
  outline: none; color: #fff;
}
.chatbot-fab:hover { transform: scale(1.1); background: #c20810; }
.chatbot-fab.fab-open { background: #2a2a2a; }
.chatbot-window {
  position: fixed; bottom: 100px; right: 24px; z-index: 99998;
  width: 430px; height: 600px; border-radius: 16px; overflow: hidden;
  box-shadow: 0 12px 60px rgba(0,0,0,.9), 0 0 0 1px rgba(229,9,20,.2);
  pointer-events: all !important;
}
.chatbot-iframe { width: 100%; height: 100%; border: none; display: block; }
.chat-slide-enter-active, .chat-slide-leave-active { transition: opacity .22s ease, transform .22s ease; }
.chat-slide-enter, .chat-slide-leave-to { opacity: 0; transform: translateY(20px) scale(.97); }
@media (max-width: 500px) {
  .chatbot-window { right: 0; left: 0; bottom: 90px; width: 100%; border-radius: 16px 16px 0 0; height: 70vh; }
  .chatbot-fab { bottom: 20px; right: 20px; }
}
</style>
