import { Component } from '@angular/core';

@Component({
    selector: 'app-offline',
    template: `
    <div class="box" *ngIf="!onLine">
        <div class="centreMessage">
            <mat-icon (click)="onLine = true" class="close">close</mat-icon>
            <div>
                <mat-icon class="icon">network_check</mat-icon>
            </div>
            <div class="text">
                Vous n’êtes pas connecté
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./offline.component.scss']
})
export class OfflineComponent {

    onLine: boolean = true // is en ligne 🔥

    constructor() {
        window.addEventListener('online', (): void => {
            // 🔥 we're back online!
            this.onLine = true
        });

        window.addEventListener('offline', (): void => {
            // 😱 oh no!
            this.onLine = false
        });
    }
}
