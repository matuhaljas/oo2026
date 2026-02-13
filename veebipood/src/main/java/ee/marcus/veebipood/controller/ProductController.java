package ee.marcus.veebipood.controller;

import ee.marcus.veebipood.entity.Product;
import ee.marcus.veebipood.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class ProductController {

    // localhost:8090/products
    // application.properties server.port=8090
//    @GetMapping("products")
//    public String getProducts() {
//        return "Hello World";
//    }

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("products")
    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    @DeleteMapping("products/{id}")
    public List<Product> deleteProduct(@PathVariable Long id){
        productRepository.deleteById(id);
        return productRepository.findAll();
    }

    @PostMapping("products/{id}")
    public List<Product> addProduct(@RequestBody Product product){
        productRepository.save(product);
        return productRepository.findAll();
    }

}