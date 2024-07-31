package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
public class ReqRegisterInputDto {
    private String content;
    private String registerDate;
}
