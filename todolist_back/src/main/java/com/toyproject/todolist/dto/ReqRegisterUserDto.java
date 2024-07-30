package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Data

public class ReqRegisterUserDto {

    private String userName;
    private String password;
}
