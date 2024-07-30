package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReqRegisterUserDto {
    private int userId;
    private String userName;
    private String password;
}
