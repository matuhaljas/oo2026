package ee.marcus.decathlon.repository;

import ee.marcus.decathlon.entity.Sportlane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SportlaneRepository extends JpaRepository<Sportlane,Long> {
    boolean existsByName(String name);
}
