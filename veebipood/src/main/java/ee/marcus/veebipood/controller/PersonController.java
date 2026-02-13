package ee.marcus.veebipood.controller;

import ee.marcus.veebipood.entity.Order;
import ee.marcus.veebipood.entity.Person;
import ee.marcus.veebipood.repository.OrderRepository;
import ee.marcus.veebipood.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @GetMapping("persons")
    public List<Person> getPeople(){
        return personRepository.findAll();
    }

    @DeleteMapping("persons/{id}")
    public List<Person> deletePerson(@PathVariable Long id){
        personRepository.deleteById(id);
        return personRepository.findAll();
    }

    @PostMapping("persons")
    public List<Person> addPerson(@RequestBody Person person){
        personRepository.save(person);
        return personRepository.findAll();
    }
}
