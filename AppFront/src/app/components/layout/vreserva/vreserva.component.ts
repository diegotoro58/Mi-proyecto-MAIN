import { Component, inject, signal } from '@angular/core';
import { ReservasService } from 'src/app/service/reservas.service';


@Component({
  selector: 'app-vreserva',
  templateUrl: './vreserva.component.html',
  styleUrls: ['./vreserva.component.css']
})
export class VreservaComponent {

  arrReservas = signal<any[]>([])

  reservasService = inject(ReservasService)

  async ngOnInit() {
    const reserva = await this.reservasService.getAll();
    reserva.subscribe(
      (response) => {
        console.log(response)
        this.arrReservas.set(response)
      }
    )
  }

}