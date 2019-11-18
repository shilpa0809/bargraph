import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeSearchComponent } from './palindrome-search.component';

describe('PalindromeSearchComponent', () => {
  let component: PalindromeSearchComponent;
  let fixture: ComponentFixture<PalindromeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
