package ee.marcus.kodutoo2.controller;

import ee.marcus.kodutoo2.entity.Car;
import ee.marcus.kodutoo2.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("cars")
    public List<Car> getCars(){
        return carRepository.findAll();
    }

    //filmide uleslaadimine andmebaasi
    @PostMapping("cars")
    public List<Car> addCar(@RequestBody Car car){
        if (car.getId()!=null) {
            throw new RuntimeException("Can not add with ID");
        }
        carRepository.save(car); //siin salvestab
        return carRepository.findAll(); //tagastab koik andmebaasis
    }
}
