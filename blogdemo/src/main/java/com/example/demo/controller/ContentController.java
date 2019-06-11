package com.example.demo.controller;

import com.example.demo.entity.Content;
import com.example.demo.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")
public class ContentController {

    @Autowired
    ContentRepository contentRepository;

    @PostMapping("/save")
    public Content saveContent(@RequestBody Content content){
        System.out.println("Save Content");
        return contentRepository.save(content);
    }

    @GetMapping("/{id}")
    public Content findContentById(@PathVariable("id") Integer id){
        System.out.println("Find Content ID:" + id);
        return contentRepository.findById(id).get();
    }

    @GetMapping("/list")
    public List<Content> findContentList(){
        System.out.println("List Content");
        return contentRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteContentById(@PathVariable("id") Integer id){
        System.out.println("Delete Content ID:" + id);
        Content content = contentRepository.findById(id).get();
        contentRepository.delete(content);
    }

    @PostMapping("/post")
    public Content postContent(@Valid @RequestBody Content content) {
        System.out.println("Post Content: " + content.getTitle());
        return contentRepository.save(content);
    }
}
