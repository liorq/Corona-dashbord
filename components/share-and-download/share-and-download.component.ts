import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-and-download',
  templateUrl: './share-and-download.component.html',
  styleUrls: ['./share-and-download.component.css','../generic-table/generic-table.component.css']
})
export class ShareAndDownloadComponent {
@Input()isDarkModeActive:boolean=false;
@Input()isActiveShareAndDownload:boolean=false;

}
