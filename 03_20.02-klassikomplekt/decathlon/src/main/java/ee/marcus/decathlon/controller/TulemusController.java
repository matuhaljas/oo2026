package ee.marcus.decathlon.controller;

import ee.marcus.decathlon.dto.TulemusDto;
import ee.marcus.decathlon.entity.Spordiala;
import ee.marcus.decathlon.entity.Sportlane;
import ee.marcus.decathlon.entity.Tulemus;
import ee.marcus.decathlon.repository.SpordialaRepository;
import ee.marcus.decathlon.repository.SportlaneRepository;
import ee.marcus.decathlon.repository.TulemusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class TulemusController {

    @Autowired
    private TulemusRepository tulemusRepository;

    @Autowired
    private SpordialaRepository spordialaRepository;

    @Autowired
    private SportlaneRepository sportlaneRepository;


    @GetMapping("tulemused")
    public List<Tulemus> getTulemused() { return tulemusRepository.findAll(); }

    @PostMapping("add-tulemus")
    public Tulemus addTulemus(@RequestBody Tulemus tulemus){
        return tulemusRepository.save(tulemus);
    }

    @PostMapping("tulemused")
    public Tulemus addTulemus(@RequestBody TulemusDto dto){
        if (dto.getSportlaneId() == null || dto.getSpordialaId() == null) {
            throw new RuntimeException("Missing references");
        }

        Sportlane sportlane = sportlaneRepository.findById(dto.getSportlaneId())
                .orElseThrow();

        Spordiala spordiala = spordialaRepository.findById(dto.getSpordialaId())
                .orElseThrow();

        Tulemus tulemus = new Tulemus();
        tulemus.setPunktid(dto.getPunktid());
        tulemus.setSportlane(sportlane);
        tulemus.setSpordiala(spordiala);

        tulemusRepository.save(tulemus);

        return tulemus;
    }
}
