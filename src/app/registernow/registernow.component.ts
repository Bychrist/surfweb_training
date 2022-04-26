import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';
import { WebserviceService } from '../webservice.service';


declare var $:any;


@Component({
  selector: 'app-registernow',
  templateUrl: './registernow.component.html',
  styles: [
  ]
})
export class RegisternowComponent implements OnInit {

  constructor(private webservice:WebserviceService )  { }

  ngOnInit(): void {
    this.getAllCountries()
    this.ref= `${Math.ceil(Math.random() * 10e10)}`
    this.showPayment = false;
    $(document).ready(function () {

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    })

  }
  //time now to 30th ?? 150
  options: PaystackOptions = {
    amount:15000000 ,
    email: '',
    key:'pk_test_15cc7eb938c75614fd2490b056eeaeb11a8208be',
    ref: '',
  }
  ref:any;
  randomnumber:string = ''
   countries:any[] = [];
   durationamount:number = 0;
   errormessage:string =""
   Register:string ="Register";
  success:string = ''
  showPayment:boolean = false;
 profileObj:any = { firstName:"",lastName:"",phoneNumber:"",email:"",country:"",jobRole:""}
 paymentProfile:any  ={firstName:"",lastName:"",email:""}
 senddata:any={};
  reference:string=''

  getAllCountries()
  {
      this.webservice.getAllCountries().subscribe(
        (response:any)=>{
           this.countries = response;
        },
        (error)=>{
            console.log(error)
        }
      )
  }

  accountCreate(profileForm:any)
  {

    if (profileForm.valid) {

      this.Register ="Sending.....";
      this.senddata = profileForm.value;

     this.options =  {
        amount: 15000000,
       key:'pk_test_15cc7eb938c75614fd2490b056eeaeb11a8208be',
        email: this.profileObj.email,
       ref: `${this.profileObj.phoneNumber}-${this.profileObj.firstName}-${this.profileObj.lastName}-${this.profileObj.country
}-${this.ref}`,

      }
      console.log(this.paymentProfile)
      profileForm.reset();
      this.webservice.SendMail(this.senddata).subscribe(
        (response:any)=>{

          this.success = "Thank you, your email has been sent"
          this.Register = "Register";
          alert("Thank you, your email has been sent")
          this.showPayment = true;


        },
        (error)=>{
          this.Register = "Register";
          this.errormessage = "An error has occured email was not sent"
          this.success = ""
          alert("An error has occured email was not sent")
        }

      );


    }
    else{
           this.errormessage = "Please fill all  field"
            this.success =""
          this.success = ""
    }

  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.success = 'Payment successfull';
    console.log(this.success);
    this.showPayment = false;
  }

  paymentCancel() {
    console.log('payment failed');
  }







}
