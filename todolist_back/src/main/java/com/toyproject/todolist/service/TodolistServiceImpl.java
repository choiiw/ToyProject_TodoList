package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.TodoList;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.InputMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodolistServiceImpl  {

    @Autowired
    private InputMapper inputMapper;


    public User registerUser(ReqRegisterUserDto userDto) {
        User user = User.builder()
                .userName(userDto.getUserName())
                .password(userDto.getPassword())
                .build();

        return user;
    }


    public int registerInput(ReqRegisterInputDto reqDto) {
        TodoList todoList = TodoList.builder()
                .listId(reqDto.getListId())
                .check(reqDto.getCheck())
                .input(reqDto.getInput())
                .registerDate(reqDto.getRegisterDate())
                .build();

        return inputMapper.save(todoList); // save는 DTO를 받는게 아니라 entity를 받음
    }



    //조회
    public List<RespGetInputDto> getInputList(ReqGetInputDto reqDto) {
        List<RespGetInputDto> respDtos = new ArrayList<>();

        TodoList todoList = TodoList.builder()
                .listId(reqDto.getListId())
                .check(reqDto.getCheck())
                .input(reqDto.getInput())
                .registerDate(reqDto.getRegisterDate())
                .build();

       List<TodoList> todoLists = inputMapper.findByTodoListAll(todoList);

       for(TodoList todo : todoLists) {
           RespGetInputDto dtp = RespGetInputDto.builder()
                   .listId(todo.getListId())
                   .check(todo.getCheck())
                   .input(todo.getInput())
                   .registerDate(todo.getRegisterDate())
                   .build();

           respDtos.add(dtp);
       }

       return respDtos;
    }

    //수정
    public int updateTodoList(ReqUpdateTodoListDto reqDto) {
        TodoList todoList = TodoList.builder()
                .listId(reqDto.getListId())
                .check(reqDto.getCheck())
                .input(reqDto.getInput())
                .registerDate(reqDto.getRegisterDate())
                .build();

        return inputMapper.update(todoList);
    }

    //삭제
    public int deleteTodoList(int listId) { return inputMapper.delete(listId);}
}
