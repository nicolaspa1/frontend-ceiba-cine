import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntradaComponent } from './listar-entrada.component';

describe('EntradaComponent', () => {
  let component: ListarEntradaComponent;
  let fixture: ComponentFixture<ListarEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
