import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/settings.model';
import { SettingsService } from 'src/app/settings.service';
declare const SwaggerUIBundle: any;

@Component({
  selector: 'app-swagger-ui',
  templateUrl: './swagger-ui.component.html',
  styleUrls: ['./swagger-ui.component.scss'],
})
export class SwaggerUiComponent implements OnInit {
  settings: Settings;
  constructor(svrSettings: SettingsService) {
    this.settings = svrSettings.settings;
  }

  ngOnInit(): void {
    const ui = SwaggerUIBundle({
      dom_id: '#swagger-ui',
      layout: 'BaseLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      url: this.settings.apiUrl + 'swagger.json',
      docExpansion: 'none',
      operationsSorter: 'alpha'
    });
  }

}
