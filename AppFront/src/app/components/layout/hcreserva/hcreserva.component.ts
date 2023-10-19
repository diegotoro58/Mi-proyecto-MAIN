import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservasService } from 'src/app/service/reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hcreserva',
  templateUrl: './hcreserva.component.html',
  styleUrls: ['./hcreserva.component.css']
})
export class HcreservaComponent {
  formulario: FormGroup;
  playa: string = '';
  reservaService = inject(ReservasService);
  router = inject(Router);

  constructor(private route: ActivatedRoute) {
    this.formulario = new FormGroup({
      nombrecompleto: new FormControl(),
      email: new FormControl(),
      telnumero: new FormControl(),
      ciudad: new FormControl(),
      cpostal: new FormControl(),
      pais: new FormControl(),
      detallesviaje: new FormControl(),
      destino: new FormControl(),
      fechai: new FormControl(),
      fechaf: new FormControl(),
      numeroadultos: new FormControl(),
      numeronino: new FormControl(),
      tipohabit: new FormControl()
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.playa = params['playa'];
      this.formulario.get('destino')?.setValue(this.playa);
    });
  }
  

  async onSubmit() {
    const res = await this.reservaService.reservar(this.formulario.value);
    console.log(res);
    if (!res.error) {
      this.router.navigate(['/home'])
    }
  }
}