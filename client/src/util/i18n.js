import esMessages from "content/es_messages.json"
import enMessages from "content/en_messages.json"

// @ts-ignore
const language = window.navigator.userLanguage || window.navigator.language;

export const getI18n = (id, defaultMessage = id) => {
    const messagesObject = RegExp("^es").test(language) ? esMessages : enMessages;
    const message = messagesObject[id];
    return message || defaultMessage;
}