package ee.marcus.kontrolltoo.repository;

import ee.marcus.kontrolltoo.entity.Logs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogsRepository extends JpaRepository<Logs, Long> {
}
