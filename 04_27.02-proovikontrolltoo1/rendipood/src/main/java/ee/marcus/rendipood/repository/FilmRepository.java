package ee.marcus.rendipood.repository;

import ee.marcus.rendipood.entity.Film;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<@NonNull Film,@NonNull Long> {
}
