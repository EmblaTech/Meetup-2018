import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: [],
  providers:[{
    provide : NG_VALUE_ACCESSOR,
    useExisting : forwardRef(() => PlaceComponent),
    multi: true
  }]
})
export class PlaceComponent implements ControlValueAccessor {

  private _place : String;
  OnChangefn = (_) => _;
  constructor() { }


  get place(): String {
    return this._place;
  }

  set place(value: String) {
    this._place = value;
  }

  setPlace( place){
    this._place = place;
    this.OnChangefn(place);
  }

  registerOnChange(fn: any): void {
    this.OnChangefn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this._place = obj;
  }

}
