import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product/product.component';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(product: Product[], searchValue:string): Product[] {

//Anzeigen der Produkte, wenn nichts in der Searchbar eingegeben ist

if (!product || !searchValue)
{return product;


}

//falls ja, suche nach anzahl, preis, oder produktname und zeige diese an
return product.filter(product=>product.produktname.toLowerCase().includes(searchValue.toLowerCase())
||product.anzahl.toString().toLowerCase().includes(searchValue.toLowerCase())
||product.preis.toString().toLowerCase().includes(searchValue.toLowerCase()));


  }

}
