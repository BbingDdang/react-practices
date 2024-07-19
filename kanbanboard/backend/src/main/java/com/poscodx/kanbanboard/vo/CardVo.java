package com.poscodx.kanbanboard.vo;


import lombok.Data;

@Data
public class CardVo {
    private Long no;
    private String title;
    private String description;
    private String status;
}
