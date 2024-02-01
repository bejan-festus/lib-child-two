import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AppStoreService } from 'app-store-bej';

@Component({
  selector: 'lib-lib-child-two',
  template: `
    <div>
    <h3>Parent to child</h3>
    <input class="form-control" disabled  [(ngModel)]="ParentData" type="text">
</div>
  `,
  styles: [
  ]
})
export class LibChildTwoComponent implements OnChanges {

  @Input() ParentData:any = ''

  @Output() ChildData = new EventEmitter<string>()

  constructor(private storeService:AppStoreService){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ChildData.emit(this.ParentData)
    this.storeService.dataSubject.next(this.ParentData)
  }
  

}
