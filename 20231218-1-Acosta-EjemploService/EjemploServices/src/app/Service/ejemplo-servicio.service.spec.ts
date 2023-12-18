import { TestBed } from '@angular/core/testing';

import { EjemploServicioService } from './ejemplo-servicio.service';

describe('EjemploServicioService', () => {
  let service: EjemploServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemploServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
