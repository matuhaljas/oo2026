package ee.marcus.decathlon.controller;

import ee.marcus.decathlon.entity.Riik;
import ee.marcus.decathlon.entity.Spordiala;
import ee.marcus.decathlon.repository.RiikRepository;
import ee.marcus.decathlon.repository.SpordialaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class SpordialaController {

    @Autowired
    private SpordialaRepository spordialaRepository;

    @Autowired
    private RiikRepository riikRepository;

    @GetMapping("spordialad")
    public List<Spordiala> getSpordialad() { return spordialaRepository.findAll(); }

    @PostMapping("add-spordiala")
    public Spordiala addSpordiala(@RequestBody Spordiala spordiala){
        return spordialaRepository.save(spordiala);
    }

}
