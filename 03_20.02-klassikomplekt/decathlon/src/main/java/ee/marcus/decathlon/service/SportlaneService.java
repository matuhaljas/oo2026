package ee.marcus.decathlon.service;

import ee.marcus.decathlon.entity.Sportlane;
import ee.marcus.decathlon.repository.SportlaneRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor

public class SportlaneService {

    private SportlaneRepository sportlaneRepository;

    public void validate(Sportlane sportlane){
        if (sportlane.getId() != null) {
            throw new RuntimeException("Cannot sign up with ID");
        }
        if (sportlaneRepository.existsByName(sportlane.getName())) {
            throw new RuntimeException("Athlete with this name already exists");
        }
        if (sportlane.getName() == null || sportlane.getName().isBlank()) {
            throw new RuntimeException("Name is required");
        }
    }
}
