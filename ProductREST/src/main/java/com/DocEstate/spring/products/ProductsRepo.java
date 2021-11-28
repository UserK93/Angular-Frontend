package com.DocEstate.spring.products;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//Für die Verbindung mit der Datenbank Id als Integer festgelegt, Datenbanktabelle = Products
@Repository
public interface ProductsRepo extends JpaRepository<Products, Integer> {

}
