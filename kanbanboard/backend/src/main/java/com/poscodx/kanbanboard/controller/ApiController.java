package com.poscodx.kanbanboard.controller;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardVo;
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

    @PostMapping("/card")
    public ResponseEntity<JsonResult> create(@RequestBody CardVo vo) {
        log.info("Request[POST /api] : " + vo);
        cardRepository.insert(vo);
        return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(vo));
    }



}
