export default {
    install(Vue) {
        Vue.prototype.toast = async (msg, duration = 2500) => {
            let messageRoot = document.createElement('div');
            messageRoot.className = "message";
            let message = document.createElement('span');
            if (message.insertAdjacentText) {
                message.insertAdjacentText("afterbegin", msg);
            }
            else {
                message.appendChild(msg);
            }

            if (messageRoot.insertAdjacentElement) messageRoot.insertAdjacentElement("afterbegin", message);
            else messageRoot.appendChild(message);

            let rootId = document.getElementById('app');
            let ydMessage = document.querySelector(".message");
            if (ydMessage) ydMessage.remove();
            if (rootId.insertAdjacentElement) {
                rootId.insertAdjacentElement("afterbegin", messageRoot);
            }
            else {
                rootId.appendChild(messageRoot);
            }

            setTimeout(function () {
                ydMessage = document.querySelector(".message");
                if (ydMessage) ydMessage.remove();
            }, duration);
        };

    }
}