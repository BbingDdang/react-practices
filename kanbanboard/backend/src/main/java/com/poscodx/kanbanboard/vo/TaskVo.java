package com.poscodx.kanbanboard.vo;

import lombok.Data;

@Data
public class TaskVo {
    private Long no;
    private String name;
    private String done;
    private Long cardNo;
}
