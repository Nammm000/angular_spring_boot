package tech.getarrays.diarymanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.diarymanager.exception.UserNotFoundException;
import tech.getarrays.diarymanager.models.Diary;
import tech.getarrays.diarymanager.repo.DiaryRepo;

import jakarta.transaction.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class DiaryService {
    private final DiaryRepo diaryRepo;

    @Autowired
    public DiaryService(DiaryRepo diaryRepo) {
        this.diaryRepo = diaryRepo;
    }

    public Diary addDiary(Diary diary) {
        //System.out.println("0 " + diary.getUserId());
        //System.out.println("1 " + diary.getId());
        diary.setUserId(123L);
        //diary.setId(111L);
        diary.setCreatedTime(LocalDateTime.now());
        diary.setDiaryCode(UUID.randomUUID().toString());
        return diaryRepo.save(diary);
    }

    public List<Diary> findAllDiarys() {
        //System.out.println("diaryRepo.findAll()");
        return diaryRepo.findAll();
    }

    public Diary updateDiary(Diary diary) {
        diary.setCreatedTime(LocalDateTime.now());
        return diaryRepo.save(diary);
    }

    public Diary findDiaryById(Long id) {
        return diaryRepo.findDiaryById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteDiary(Long id){
        diaryRepo.deleteDiaryById(id);
    }
}
