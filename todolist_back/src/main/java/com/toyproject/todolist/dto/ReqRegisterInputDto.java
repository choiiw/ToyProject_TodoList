package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
public class ReqRegisterInputDto {
    private String input;
    private String registerDate;
}
