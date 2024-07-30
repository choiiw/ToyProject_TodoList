package com.toyproject.todolist.entity;

import com.toyproject.todolist.dto.RespGetTodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private int todoId;
    private int checkStatus;
    private String content;
    private String registerDate;

    public RespGetTodoDto toRespGetTodoDto() {
        return RespGetTodoDto.builder()
                .todoId(todoId)
                .checkStatus(checkStatus)
                .content(content)
                .registerDate(LocalDate.parse(registerDate.substring(0, registerDate.lastIndexOf(" "))).format(DateTimeFormatter.ofPattern("yyyy-MM-dd")))
                .build();
    }
}
