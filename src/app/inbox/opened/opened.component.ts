import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'opened',
  templateUrl: './opened.component.html'
})
export class OpenedComponent implements OnInit{
  @Input() mail: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
    });

    // this.route.data.pluck('id').subscribe((id) => {
    //   console.log(id);
    // })
  }
}
