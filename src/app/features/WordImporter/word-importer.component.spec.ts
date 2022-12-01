import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordImporterComponent } from './word-importer.component';

describe('WordImporterComponent', () => {
  let component: WordImporterComponent;
  let fixture: ComponentFixture<WordImporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WordImporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordImporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
