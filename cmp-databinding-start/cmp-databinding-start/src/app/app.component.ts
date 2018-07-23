import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

/** assignment work begins */
oddNumbers: number[] = [];
evenNumbers: number[] = [];


onIntervalFired(firedNumber: number) {
  console.log(firedNumber);
  if (firedNumber % 2 === 0 ) {
    this.evenNumbers.push(firedNumber);
  } else {
    this.oddNumbers.push(firedNumber);
  }
}


  /**assignment work ends */
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a server'}];

  onServerAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
