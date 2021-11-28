import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestapiService } from '../restapi/restapi.service';



export class Product {
  constructor(
    public id: string,
    public produktname: string,
    public preis: string,
    public anzahl: string

  ) {
  }
}



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
  registerForm!: FormBuilder;
  product!: Product;
  constructor(private service:RestapiService,
    private modalService: NgbModal,
    private fb:FormBuilder,
    httpClient :HttpClient



  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
