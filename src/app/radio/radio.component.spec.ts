import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { By } from '@angular/platform-browser';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

describe ('should show radio singular name', () => {
  it ('should show radio singular name', () => {
    expect (component.title).toBe('RADIO SINGULARS');
  });
  it ('should show the title RADIO SINGULARS on the template', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect (title.textContent).toBe('RADIO SINGULARS')
  });
});

describe ('should search radio station by name', () => {
  it ("should have an input with the placeholder, 'Escribe el nombre de la emisora'", () => {
    const placeholder = fixture.nativeElement.querySelector('input').placeholder;
    const valuePlaceholder = 'Escribe el nombre de la emisora';
    expect (placeholder).toBe(valuePlaceholder);
  });

  it ('should have a button with the title search', () => {
    const button = fixture.nativeElement.querySelector('button').textContent;
    const valueButton = 'Search';
    expect (button).toBe(valueButton);
  });

  it ('should run the search method once', () => {
    const searchRadioSpy = jest.spyOn (component, 'searchRadio');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect (searchRadioSpy).toHaveBeenCalledTimes(1);
  });
});

describe ('Radio station list', () => {
  it ('should exist a radio station list', () => {
    const radioList = fixture.nativeElement.querySelector('ul');
    expect (radioList).not.toBeNull();
  });
  it ('should inicialize void', () => {
    const liArray = fixture.nativeElement.querySelectorAll('li');
    expect (liArray.length).toBe(0);
  });
  it ('If a succesful search is done, should return at list one result', () => {
    component.radioStation = [{
      name: "Test",
      url: "test",
      country: "test",
    }]
    const searchRadioSpy = jest.spyOn (component, 'searchRadio').mockImplementation (() => {
      component.filterArray = component.radioStation.filter ((radio)=> {
        return radio.name.includes('T');
      })
    })
    const liArray = fixture.nativeElement.querySelectorAll('li');
    // const input = fixture.debugElement.query(By.css('input'));
    // input.triggerEventHandler('keyup', 'teletaxi');
    // component.inputValue = "teletaxi";
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect (liArray.length).toBeGreaterThan(0);
    // expect (searchRadioSpy).toHaveBeenCalledTimes(1);
  })
});
});