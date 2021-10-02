import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { mockData } from 'src/app/mock-data/mockJsonPacks';
import { AppService } from 'src/app/app/app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('horizontalStepper')
  horizontalStepper!: MatStepper;
  @ViewChild('addressAutocomplete')
  addressAutocomplete!: ElementRef;
  public submitForm: FormGroup = new FormGroup({});
  addressForm: FormGroup = new FormGroup({});
  paymentForm: FormGroup = new FormGroup({});

  public features:any = [];
  public propertyTypes:any = [];
  public propertyStatuses:any = [];
  public cities:any = [];
  public neighborhoods:any = [];
  public streets:any = [];
  public lat: number = 40.678178;
  public lng: number = -73.944158;
  public zoom: number = 12;

  inputData: any = mockData;

  constructor(
    public appService: AppService,
    private fb: FormBuilder,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    this.addressForm = this.fb.group({
      location: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: '',
      neighborhood: '',
      street: ''
    });
    this.paymentForm = this.fb.group({
      location: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: '',
      neighborhood: '',
      street: ''
    });

    this.submitForm = this.fb.group({
      basic: this.fb.group({
        title: [null, Validators.required],
        desc: null,
        priceDollar: null,
        priceEuro: null,
        propertyType: [null, Validators.required],
        propertyStatus: null,
        gallery: null
      }),
      address: this.fb.group({
        location: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: '',
        neighborhood: '',
        street: ''
      }),
      additional: this.fb.group({
        bedrooms: '',
        bathrooms: '',
        garages: '',
        area: '',
        yearBuilt: ''
      }),
      media: this.fb.group({
        featured: false
      })
    });

    this.setCurrentPosition();
    // this.placesAutocomplete();
  }


  public onSelectionChange(e: any) {
    // if(e.selectedIndex == 4){   
    //   this.horizontalStepper._steps.forEach(step => step.editable = false);
    //   console.log(this.submitForm.value);      
    // }
    // this.horizontalStepper._steps.forEach(step => step.editable = false);
  }

  public reset() {
    this.horizontalStepper.reset();

    const videos = <FormArray>this.submitForm.controls.media.get('videos');
    while (videos.length > 1) {
      videos.removeAt(0)
    }
    const plans = <FormArray>this.submitForm.controls.media.get('plans');
    while (plans.length > 1) {
      plans.removeAt(0)
    }
    const additionalFeatures = <FormArray>this.submitForm.controls.media.get('additionalFeatures');
    while (additionalFeatures.length > 1) {
      additionalFeatures.removeAt(0)
    }

    this.submitForm.reset({
      additional: {
        features: this.features
      },
      media: {
        featured: false
      }
    });

  }



  // -------------------- Address ---------------------------  
  public onSelectCity() {
    // this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
    // this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
  }
  public onSelectNeighborhood() {
    // this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }


  // public getAddress(){    
  //   this.mapsAPILoader.load().then(() => {
  //     let geocoder = new google.maps.Geocoder();
  //     let latlng = new google.maps.LatLng(this.lat, this.lng); 
  //     geocoder.geocode({'location': latlng}, (results, status) => {
  //       if(status === google.maps.GeocoderStatus.OK) {
  //         console.log(results); 
  //         //this.addresstext.nativeElement.focus();  
  //         let address = results[0].formatted_address; 
  //         this.submitForm.controls.location.setValue(address); 
  //         this.setAddresses(results[0]);          
  //       }
  //     });
  //   });
  // }
  public getAddress() {
    this.appService.getAddress(this.lat, this.lng).subscribe(response => {
      console.log(response);
      // if (response['results'].length) {
      //   let address = response['results'][0].formatted_address;
      //   this.submitForm.controls.address.get('location').setValue(address);
      //   this.setAddresses(response['results'][0]);
      // }
    })
  }
  public onMapClick(e: any) {
    this.lat = e.coords.lat;
    this.lng = e.coords.lng;
    this.getAddress();
  }
  public onMarkerClick(e: any) {
    console.log(e);
  }

  public setAddresses(result: any) {}

}
