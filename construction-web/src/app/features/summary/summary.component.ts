import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConstructionService } from '../../core/services/construction.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  dataSource: any[] = [];
  constructor(public service: ConstructionService,public router:Router) {}
  ngOnInit() {
    this.service.getAll().subscribe((res:any) => {
      this.dataSource = res;
    },(error)=>{
      console.log(error);     
    });
  }

  goToDetail(index: number) {
    this.router.navigateByUrl(`/detail/${index}`);
  }
}
