import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-simple-share',
  templateUrl: './simple-share.component.html',
  styleUrls: ['./simple-share.component.scss']
})
export class SimpleShareComponent implements OnInit {

  @Input() links: {
    dribbble?: string,
    facebook?: string,
    instagram?: string,
    linkedin?: string,
    medium?: string,
    twitter?: string,
    youtube?: string,
  } = {};

  constructor() { }

  ngOnInit() { }

}
