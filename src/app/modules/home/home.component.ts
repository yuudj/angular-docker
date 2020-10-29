import { Component } from '@angular/core';
import { Settings } from 'src/app/settings.model';
import { SettingsService } from 'src/app/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: Settings;

  constructor(svrSettings: SettingsService) {
    this.data = svrSettings.settings;
  }

}
