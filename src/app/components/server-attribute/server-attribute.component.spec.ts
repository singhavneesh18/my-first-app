import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerAttributeComponent } from './server-attribute.component';

describe('ServerAttributeComponent', () => {
  let component: ServerAttributeComponent;
  let fixture: ComponentFixture<ServerAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
