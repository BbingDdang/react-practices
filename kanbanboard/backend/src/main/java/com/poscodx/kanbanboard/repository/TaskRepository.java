package com.poscodx.kanbanboard.repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaskRepository {

    @Autowired
    private SqlSession sqlSession;

    public List<TaskVo> findAll() {
        return sqlSession.selectList("task.findall");
    }

    public int insert(TaskVo vo) {
        return sqlSession.insert("task.insert", vo);
    }

    public int updateTask(Long no) {
        System.out.println(sqlSession.update("task.updateCheck", no));

        return sqlSession.update("task.updateCheck", no);
    }

    public int deleteTask(Long no) {
        return sqlSession.delete("task.deleteByNo", no);
    }
}
