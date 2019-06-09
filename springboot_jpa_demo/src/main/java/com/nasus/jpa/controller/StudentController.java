package com.nasus.jpa.controller;

import com.nasus.jpa.entity.Student;
import com.nasus.jpa.service.StudentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Project Name:springboot_jpa_demo <br/>
 * Package Name:com.nasus.jpa.controller <br/>
 * Date:2019/2/19 21:55 <br/>
 * <b>Description:</b> TODO: 描述该类的作用 <br/>
 *
 * @author <a href="turodog@foxmail.com">nasus</a><br/>
 * Copyright Notice =========================================================
 * This file contains proprietary information of Eastcom Technologies Co. Ltd.
 * Copying or reproduction without prior written approval is prohibited.
 * Copyright (c) 2019 =======================================================
 */

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/books")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student){
        return studentService.save(student);
    }

    @GetMapping("/{id}")
    public Student findStudentById(@PathVariable("id") Integer id){
        return studentService.findStudentById(id);
    }

    @GetMapping("/list")
    public List<Student> findStudentList(){
        return studentService.findStudentList();
    }

    @DeleteMapping("/{id}")
    public void deleteStudentById(@PathVariable("id") Integer id){
        studentService.delete(id);
    }

    @PutMapping("/update")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

}
