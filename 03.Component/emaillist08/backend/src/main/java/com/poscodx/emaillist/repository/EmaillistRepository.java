package com.poscodx.emaillist.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.emaillist.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> findAll(String keyword) {
		return sqlSession.selectList("emaillist.findall", keyword);
	}

}
