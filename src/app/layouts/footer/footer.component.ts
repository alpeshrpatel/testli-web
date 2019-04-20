import { Component } from '@angular/core';

import { Utils } from '../../shared';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    year = Utils.getCopyrightYear();
}
