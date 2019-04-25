import { EventEmitter } from '@angular/core';

export class NotificationService {
    // notificador:
    notifier = new EventEmitter<string>()

    // notificar:
    notify(message: string) {
        this.notifier.emit(message)
    }
}
