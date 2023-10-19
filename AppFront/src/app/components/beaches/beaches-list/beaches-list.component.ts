import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeachesService } from 'src/app/service/beaches.service';

@Component({
  selector: 'app-beaches-list',
  templateUrl: './beaches-list.component.html',
  styleUrls: ['./beaches-list.component.css']
})
export class BeachesListComponent implements OnInit {
  arrBeaches: any[] = [];
  playa: string | null = null;

  constructor(
    private router: Router,
    private beachesService: BeachesService
  ) {}

  ngOnInit() {
    this.beachesService.getAll().subscribe((beaches) => {
      this.arrBeaches = beaches;
    });
  }
  
  selectBeach(beach: any) {
    this.router.navigate(['/hcreserva'], {
      queryParams: { playa: beach.playa }
    });
  }
}