package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqRegisterInputDto;
import com.toyproject.todolist.dto.ReqRegisterUserDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
import com.toyproject.todolist.dto.RespGetInputDto;
import com.toyproject.todolist.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TodolistService {
    User registerUser(ReqRegisterUserDto userDto);
    int registerInput(ReqRegisterInputDto reqDto);
    List<RespGetInputDto> getInputList(RespGetInputDto respDto);
    int updateTodoList(ReqUpdateTodoListDto reqDto);
    int deleteTodoList(int listId);
}
