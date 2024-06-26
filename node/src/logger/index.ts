import { luxon } from "../deps"

enum logMessageType {
    error = "ERR",
    warning = "WRN",
    information = "INF"
}

export class Logger {
    private write(messageType: logMessageType, message: string, body?: any): void {
        let now = `UTC ${luxon.DateTime.now().toUTC().toFormat('yyyy-MM-dd HH:mm:ss')}`
        console.log(`[${messageType}] (${now}) ${message}\n`)
        if (body) {
            console.log(`${JSON.stringify(body, null, 4)}\n`)
            return
        }
    }

    info(message: string, body?: any): void {
        this.write(logMessageType.information, message, body) 
    }

    warning(message: string, body?: any): void {
        this.write(logMessageType.warning, message, body) 
    }

    error(message: string, body?: any): void {
        this.write(logMessageType.error, message, body) 
    }
}