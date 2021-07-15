import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAfiliadoComponent } from './borrar-afiliado.component';

describe('BorrarAfiliadoComponent', () => {
  let component: BorrarAfiliadoComponent;
  let fixture: ComponentFixture<BorrarAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarAfiliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
