import { Component } from '@angular/core';

@Component({
	selector: 'button[bpButton]',
	template: ` <ng-content></ng-content> `,
	styles: [
		`
			:host {
				padding-left: 10px;
				padding-right: 10px;
				padding-top: 5px;
				padding-bottom: 5px;
				background-image: linear-gradient(#303030, #262626);
				border: 2px solid #212121;
			}

			:host:hover {
				background-image: linear-gradient(#262626, #262626);
			}

			:host:active {
				background-image: linear-gradient(#262626, #303030);
			}
		`,
	],
	standalone: true,
})
export class BlueprintButtonComponent {}