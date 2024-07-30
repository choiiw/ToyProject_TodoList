package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;

import java.util.List;

public interface TodolistService {
//    User registerUser(ReqRegisterUserDto userDto);
    int registerTodo(ReqRegisterInputDto reqDto); // 추가
    List<RespGetTodoDto> getTodoList(String registerDate); // 조회
    int updateTodo(ReqUpdateTodoListDto reqDto); // 수정
    int deleteTodo(int todoId); // 삭제
}
