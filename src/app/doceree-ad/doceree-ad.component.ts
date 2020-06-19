import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doceree-ad',
  templateUrl: './doceree-ad.component.html',
  styleUrls: ['./doceree-ad.component.scss']
})
export class DocereeAdComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    console.log('first')
    //this.loadScriptForDivData();
    setTimeout(() => {
      console.log('2nd load')
      this.loadScriptForDivData2();
    }, 2000);
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.src = url;
    body.appendChild(script);
  }

  public loadScriptForDivData() {
    const el = <HTMLDivElement> document.getElementById('DOC_fg95yysk21ib1qg');
    const script = document.createElement('script');
    script.innerText = "var docCont={contet_id:'DOC_fg95yysk21ib1qg',content_sizes:['200 x 200'],content_type:'img'};";  
    el.appendChild(script);
    this.loadScript('http://localhost:2000/render/getJS');
  }

  public loadScriptForDivData2() {
    const el = <HTMLDivElement> document.getElementById('DOC_9fhirh4skb1q0c1d');
    const script = document.createElement('script');
    script.innerText = "var docCont={contet_id:'DOC_9fhirh4skb1q0c1d',content_sizes:['250 x 250'],content_type:'img'};";  
    el.appendChild(script); 
    this.loadScript('http://localhost:2000/render/getJS');
  }

  public loginToDoceree() {
    console.log('logging in')
  }

  // script.innerText = 
  //   script.innerText = '';

}
