package com.DocEstate.spring;

import com.DocEstate.spring.products.Products;
import com.DocEstate.spring.products.ProductsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
//Für die Kommunikation zwischen Back-und Frontend
@CrossOrigin(origins = "http://localhost:4200")
public class ProductServiceApplication {

	@Autowired
	ProductsRepo productsRepo;

	@Autowired
	public static void main(String[] args) {
		SpringApplication.run(ProductServiceApplication.class, args);
	}

	//Für den Login
	@GetMapping("/")
	public String login(){

		return "authenticated successfully" ;
	}

	//Produkt hinzufügen durch Requestbody des Objektes Products mit PostRequest
	@PostMapping("/addProduct")
	public Products addProduct(@RequestBody Products products) {

		return productsRepo.save(products);
	}

	//Anzeigen von Produkten mit Get Request
	@GetMapping("/getProducts")
	public Iterable<Products> getProducts() {

		return productsRepo.findAll();
	}

	// Löschen eines Produkts mit übergebener ID des ProduktObjektes mit Delete Request
	@DeleteMapping("/{id}/deleteProduct")
	public void deleteProduct(@PathVariable("id") Integer id) {

		productsRepo.deleteById(id);
	}

	//bearbeiten von Produkten mit übergebener ID des ProduktObjektes mit Put Request
	@PutMapping("/{id}/edit")
	public void editProduct(@PathVariable("id") Integer id, @RequestBody Products products) {

		productsRepo.save(products);
	}


}
