package com.toyproject.todolist.dto;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class RespGetTodoListDto {
        private int todoId;
        private int checkStatus;
        private String content;
        private String registerDate;
}
