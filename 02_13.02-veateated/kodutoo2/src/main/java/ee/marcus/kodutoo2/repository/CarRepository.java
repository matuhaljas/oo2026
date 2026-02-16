package ee.marcus.kodutoo2.repository;

import ee.marcus.kodutoo2.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car,Long> {
}
