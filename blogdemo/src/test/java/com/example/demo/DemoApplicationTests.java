package com.example.demo;

import com.example.demo.controller.ContentController;
import com.example.demo.entity.Content;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Before
	public void init() {
		System.out.println("-----------------开始测试-----------------");
	}

	@Autowired
	private ContentController contentController;

	@Test
	public void testGetContent() {
		List list = contentController.findContentList();
		System.out.println("---------test controller get method---------");
		System.out.println(list);
	}

//	@Test
	public int testPostContent() {
		System.out.println("---------test controller post method---------");
		Content content = new Content();
		content.setTitle("测试");
		content.setAuthor("junit");
		Date today = new Date();
		content.setTime(today);
		content.setDescription("Desc");
		contentController.postContent(content);
		Integer id = content.getId();
		return id;
	}

	@Test
	public void testEditContent() {
		System.out.println("---------test controller edit method---------");
		Content content = new Content();
		content.setTitle("测试更新");
		content.setAuthor("junit updated");
		Date today = new Date();
		content.setTime(today);
		content.setDescription("Desc");

		Integer id = testPostContent();
		contentController.updateContent(id, content);
		testRemoveContent(id);
	}

//	@Test
	public void testRemoveContent(Integer id) {
		System.out.println("---------test controller delete method---------");
		Content content = contentController.findContentById(id);
		if (content != null) {
			contentController.deleteContentById(content.getId());
		}

	}

	@After
	public void after() {
		System.out.println("-----------------测试结束-----------------");
	}


}
