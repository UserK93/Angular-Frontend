import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../product/product.component';
import { RestapiService } from '../restapi/restapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  product: Product={
    id: '',
    produktname: '',
    preis: '',
    anzahl: ''

  };
  products: any;
  editForm!: FormGroup;
  deleteId!:number;
  searchValue!: string;
  closeResult!: string;
  data: any;

  constructor(private service:RestapiService,
    private modalService: NgbModal, private httpClient :HttpClient,
    private fb:FormBuilder) { }


  ngOnInit() {
    //Aufruf von getProducts zum auflisten der Produkte auf der Startseite 
    this.getProducts();
    //setze Werte von Editform in den Formbuilder
    this.editForm = this.fb.group({
    id: [''],
    produktname: [''],
    preis: [''],
    anzahl: [''],
  } );
  }


//Funktion zum öffnen des ModalMenus zum Hinzufügen von Produkten
  open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

//Funktion zum öffnen des ModalMenus zum editieren
//targetModal und produkte als Parameter
  openEdit(targetModal: any, products:any) {
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });

// Werte des aktuellen übergebenen Objekts werden übernommen
  this.editForm.patchValue( {
    id: products.id, 
    produktname: products.produktname,
    preis: products.preis,
    anzahl: products.anzahl
  });
}
//Funktion zum öffnen des ModalMenus zum löschen
openDelete(targetModal: any, products: any) {
  this.deleteId = products.id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}


//beim aufrufen der onSave funktion eine put request an den server übergeben
//die edit Funktion aus der REST Api wird mit der übergebenen id der tabelle aufgerufen
//Authentifieerung des Nutzers user
onSave() {
  let username='user'
  let password='user'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  const editURL = 'http://localhost:8083/' + this.editForm.value.id + '/edit';
  console.log(this.editForm.value);
  this.httpClient.put(editURL, this.editForm.value,{headers})
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}

//Hinzufügen von Produkten mittels Formular(NgForn)
//post request auf /addProduct beim aufruf der onSubmit Funktion, beim klicken eines submit buttons
 //Formdeatils wie produktname, preis, anzahl werden dabei übergeben
 //Authentifizierung mit User user
onSubmit(f: NgForm) {
  let username='user'
  let password='user'
  const url = 'http://localhost:8083/addProduct';
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  this.httpClient.post(url, f.value,{headers})
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
}

//delete request beim aufruf der on Delete Funktion
// Id vom der Tabelle wird übergeben
onDelete() {
  let username='user'
  let password='user'
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  const deleteURL = 'http://localhost:8083/' + this.deleteId + '/deleteProduct';
  this.httpClient.delete(deleteURL,{headers})
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

  getProducts(){
let resp=this.service.getProducts();
resp.subscribe((data: any)=>this.products=data);
  }
}