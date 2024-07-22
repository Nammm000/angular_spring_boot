package tech.getarrays.diarymanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.diarymanager.models.Diary;

import java.util.Optional;

public interface DiaryRepo extends JpaRepository<Diary, Long> {
    void deleteDiaryById(Long id);

    Optional<Diary> findDiaryById(Long id);
}
