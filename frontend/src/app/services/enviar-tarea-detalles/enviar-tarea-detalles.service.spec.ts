import { TestBed } from '@angular/core/testing';

import { EnviarTareaDetallesService } from './enviar-tarea-detalles.service';

describe('EnviarTareaDetallesService', () => {
  let service: EnviarTareaDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarTareaDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
