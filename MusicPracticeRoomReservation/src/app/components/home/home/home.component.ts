import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  fileUploads: Array<Observable<string[]>>
  fileUploadst: Array<string> = [];

  constructor(private bannerservice : BannerService) { }

  ngOnInit() {
    this.bannerservice.getAllBanner().subscribe((res : any) => {
      for (let index = 0; index < res.length; index++) {
        this.fileUploadst.push('http://localhost:8081/banner/' + res[index].img_name);
        console.log(this.fileUploadst);
        
      }
      // res.forEach(res => {
      //   this.bannerservice.getBannerById(res.img_name).subscribe((res2 :any) => {
      //     console.log(res2);
          
      //     this.fileUploadst = res2;
      //     //this.fileUploads.push(res2);
      //   })
      // });
    });
  }
  

}
