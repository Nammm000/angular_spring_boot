package tech.getarrays.diarymanager.models;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;


enum Accessibility {
    PUBLIC, PRIVATE
}

@Entity
public class Diary implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    private Long userId;
    private String title;

    private LocalDateTime createdTime;

    private String content;

    private Accessibility accessibility;

    @Column(nullable = false, updatable = false)
    private String diaryCode;

    public Diary() {}

    public Diary(Long id, Long userId, String title, LocalDateTime createdTime, String content, Accessibility accessibility, String diaryCode) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.createdTime = createdTime;
        this.content = content;
        this.accessibility = accessibility;
        this.diaryCode = diaryCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDiaryCode() {
        return diaryCode;
    }

    public void setDiaryCode(String diaryCode) {
        this.diaryCode = diaryCode;
    }

//    @Override
//    public String toString() {
//        return "Diary{" +
//                "id=" + id +
//                ", name='" + name + '\'' +
//                ", email='" + email + '\'' +
//                ", jobTitle='" + jobTitle + '\'' +
//                ", phone='" + phone + '\'' +
//                '}';
//    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(LocalDateTime createdTime) {
        this.createdTime = createdTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Accessibility getAccessibility() {
        return accessibility;
    }

    public void setAccessibility(Accessibility accessibility) {
        this.accessibility = accessibility;
    }
}
