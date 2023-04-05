import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookpropertymodalComponent, PropModel } from '../modals/bookpropertymodal/bookpropertymodal.component';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.scss']
})
export class PropertydetailsComponent implements OnInit {


  items: GalleryItem[] = [];
  imageData = data;
  


  constructor(public gallery: Gallery, public lightbox: Lightbox, private dialog: MatDialog) {
  }
  
  ngOnInit() {
    

    /** Basic Gallery Example */
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }
   // Open Modal Popup
  OpenPropDialog() {
    const obj: PropModel = { Message: 'Test' }
    const popModal = this.dialog.open(BookpropertymodalComponent, {
      data: obj,
      width: '60%'
    });
  }
}


const data = [
  {
    srcUrl: 'assets/images/img-gallery/gal-1.jpg',
    previewUrl: 'assets/images/img-gallery/gal-1.jpg'
  },
  {
    srcUrl: 'assets/images/img-gallery/gal-2.jpg',
    previewUrl: 'assets/images/img-gallery/gal-2.jpg'
  },
  {
    srcUrl: 'assets/images/img-gallery/gal-3.jpg',
    previewUrl: 'assets/images/img-gallery/gal-3.jpg'
  },
  {
    srcUrl: 'assets/images/img-gallery/gal-4.jpg',
    previewUrl: 'assets/images/img-gallery/gal-4.jpg'
  }
];
