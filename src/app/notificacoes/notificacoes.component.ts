import { Component, OnInit } from '@angular/core';
import { NotificacoesService } from './notificacoes.service';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.css']
})
export class NotificacoesComponent implements OnInit {

  constructor(private notificacoesService: NotificacoesService) { }

  ngOnInit() {
  }

}
