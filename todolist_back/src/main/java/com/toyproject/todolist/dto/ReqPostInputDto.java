package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;


@Data
public class ReqPostInputDto {
    private int listId;
    private int check;
    private String input;
    private String registerDate;
}
