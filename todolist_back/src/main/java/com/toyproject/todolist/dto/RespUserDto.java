package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespUserDto {
    private int userId;
    private String userName;
    private String password;
}
