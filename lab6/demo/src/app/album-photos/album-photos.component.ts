import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlbumService} from "../album.service";
import {Location} from "@angular/common";
import {Photo} from "../models";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  constructor(private route: ActivatedRoute,
              private albumService: AlbumService,
              public location: Location) {
    this.photos = [];
  }
  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(){
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));
      this.albumService.getPhotos(id).subscribe((photos)=>{
        this.photos = photos;
      })
    })
  }
}
