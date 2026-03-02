package ee.marcus.rendipood.repository;


import ee.marcus.rendipood.entity.Rental;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<@NonNull Rental,@NonNull Long> {
}
