package com.toyproject.todolist.dto;

import com.toyproject.todolist.entity.Todo;
import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
public class ReqUpdateTodoListDto {
    private int todoId;
    private int checkStatus;
    private String content;
    private String registerDate;

    public Todo toEntity() {
        return Todo.builder()
                .todoId(todoId)
                .checkStatus(checkStatus)
                .content(content)
                .registerDate(registerDate)
                .build();
    }
}
