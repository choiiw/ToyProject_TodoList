package com.toyproject.todolist.entity;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class TodoList {
    private int listId;
    private int check;
    private String input;
    private Date registerDate;
}
