package com.example.demo.repository;

import com.example.demo.entity.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content,Integer>, CrudRepository<Content, Integer> {
}
