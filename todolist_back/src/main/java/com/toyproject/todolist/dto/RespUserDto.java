package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespUserDto {
    private int userId;
    private int todoId;
    private int checkStatus;
    private String content;
    private String registerDate;
}
