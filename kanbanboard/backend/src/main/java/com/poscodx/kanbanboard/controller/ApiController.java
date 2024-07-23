package com.poscodx.kanbanboard.controller;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
public class ApiController {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/card")
    public ResponseEntity<JsonResult> read() {
        log.info("Request[GET /api]");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(cardRepository.findAll()));
    }

    @GetMapping("/task")
    public ResponseEntity<JsonResult> readTask() {
        log.info("Request[GET /api]");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(JsonResult.success(taskRepository.findAll()));
    }

    @PostMapping("/task")
    public ResponseEntity<JsonResult> createTask(@RequestBody TaskVo vo) {
        log.info("Request[POST /api]");
        taskRepository.insert(vo);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
    }

    @PutMapping("/task")
    public ResponseEntity<JsonResult> updateTask(@RequestBody TaskVo vo) {
        log.info("Request[PUT /api]");
        taskRepository.updateTask(vo);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
    }
    @DeleteMapping("/task")
    public ResponseEntity<JsonResult> deleteTask(@RequestBody Long no) {
        log.info("Request[DELETE /api]");
        taskRepository.deleteTask(no);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(no));
    }


}
