import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAfiliadoComponent } from './editar-afiliado.component';

describe('EditarAfiliadoComponent', () => {
  let component: EditarAfiliadoComponent;
  let fixture: ComponentFixture<EditarAfiliadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAfiliadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAfiliadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
