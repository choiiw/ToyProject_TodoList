package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Data
@Builder
public class ReqGetInputDto {
    private int listId;
    private int check;
    private String input;
    private Date registerDate;
}
