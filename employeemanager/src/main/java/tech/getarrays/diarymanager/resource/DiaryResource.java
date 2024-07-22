package tech.getarrays.diarymanager.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.diarymanager.models.Diary;
import tech.getarrays.diarymanager.services.DiaryService;

import java.util.List;

@RestController
@RequestMapping("/user/diary")
public class DiaryResource {
    private final DiaryService diaryService;

    public DiaryResource(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Diary>> getAllDiarys () {
        //System.out.println("diaryService.findAllDiarys()");
        List<Diary> diarys = diaryService.findAllDiarys();
        System.out.println(diarys);
        return new ResponseEntity<>(diarys, HttpStatus.OK);
    }

    // getAllByOwnerIdAndPublic

    // getAllByOwnerId

    @GetMapping("/find/{id}")
    public ResponseEntity<Diary> getDiaryById (@PathVariable("id") Long id) {
        Diary diary = diaryService.findDiaryById(id);
        return new ResponseEntity<>(diary, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Diary> addDiary(@RequestBody Diary diary) {
        Diary newDiary = diaryService.addDiary(diary);
        return new ResponseEntity<>(newDiary, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Diary> updateDiary(@RequestBody Diary diary) {
        Diary updateDiary = diaryService.updateDiary(diary);
        return new ResponseEntity<>(updateDiary, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDiary(@PathVariable("id") Long id) {
        diaryService.deleteDiary(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
