package ee.marcus.veebipood.controller;

import ee.marcus.veebipood.dto.PersonLoginDto;
import ee.marcus.veebipood.dto.PersonLoginRecordDto;
import ee.marcus.veebipood.entity.Order;
import ee.marcus.veebipood.entity.Person;
import ee.marcus.veebipood.repository.OrderRepository;
import ee.marcus.veebipood.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.PersonService;

import java.util.List;
@RestController
public class PersonController {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonService personService;

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

    @PostMapping("signup")
    public Person signup(@RequestBody Person person){
        if (person.getId() != null) {
            throw new RuntimeException("Cannot sign up with ID");
        }
        personService.validate(person);
        return personRepository.save(person);
    }

    @PostMapping("login")
    public Person login(@RequestBody PersonLoginRecordDto personDto){
        Person dbPerson = PersonRepository.findByEmail(personDto.email());
        if (dbPerson == null) {
            throw new RuntimeException("Invalid email");
        }
        if (!dbPerson.getPassword().equals(personDto.password())) {
            throw new RuntimeException("Invalid password");
        }
        return dbPerson;
    }
}
