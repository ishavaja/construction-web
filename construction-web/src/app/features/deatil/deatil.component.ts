import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ConstructionService } from '../../core/services/construction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deatil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './deatil.component.html',
  styleUrl: './deatil.component.css'
})

export class DeatilComponent implements OnInit {
  form!: FormGroup;
  fullData: any[] = [];
  selectedIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private service: ConstructionService,
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {
    this.selectedIndex = Number(this.route.snapshot.paramMap.get('index'));

    this.service.getAll().subscribe((res:any) => {
      this.fullData = res;
      this.loadForm(this.fullData[this.selectedIndex]);
    });
  }
goBack() {
  this.router.navigateByUrl('/'); 
}
  loadForm(data: any) {
    this.form = this.fb.group({
      projectName: [data.properties.find((p:any) => p.label === 'Project Name')?.value],
      constructionCount: [data.properties.find((p:any) => p.label === 'Construction Count')?.value],
      isCompleted: [data.properties.find((p:any) => p.label === 'Is Construction Completed')?.value],
      roadLength: [data.properties.find((p:any) => p.label === 'Length of the road')?.value]
    });
  }

  selectObservation(index: number) {
    this.selectedIndex = index;
    this.loadForm(this.fullData[index]);
  }

  onSubmit() {
    const updatedData = {
      samplingTime: this.fullData[this.selectedIndex].samplingTime,
      properties: [
        { label: 'Project Name', value: this.form.value.projectName },
        { label: 'Construction Count', value: this.form.value.constructionCount },
        { label: 'Is Construction Completed', value: this.form.value.isCompleted },
        { label: 'Length of the road', value: this.form.value.roadLength }
      ]
    };

    this.service.update(updatedData).subscribe(() => {
      alert('Construction Updated!');
    });
  }
}

