import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fake-db";
import {Album} from "../models";
import {AlbumService} from "../album.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  newTitle: string;
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService,
              public location: Location) {
    this.album = {} as Album;
    this.loaded = true;
    this.newTitle = '';
  }

  ngOnInit() : void{
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loaded = false;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      // this.album = ALBUMS.find((album:Album) => album.id === id) as Album;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    })
  }
  updateAlbum() {
    this.loaded = false;
    this.album.title = this.newTitle;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.newTitle = '';
    })
  }
}
