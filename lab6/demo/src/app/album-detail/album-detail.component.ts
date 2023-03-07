import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Album} from "../models";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  constructor(private route: ActivatedRoute) {
    this.album = {} as Album;
  }

  ngOnInit() : void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.album = ALBUMS.find((album:Album) => album.id === id) as Album;
  }
}
