package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.*;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodolistServiceImpl implements TodolistService {

//    public User registerUser(ReqRegisterUserDto userDto) {
//        User user = User.builder()
//                .userName(userDto.getUserName())
//                .password(userDto.getPassword())
//                .build();
//
//        return user;
//    }

    @Autowired
    private TodoMapper todoMapper;

    public int registerTodo(ReqRegisterInputDto reqDto) {
        Todo todo = Todo.builder()
                .content(reqDto.getContent())
                .registerDate(reqDto.getRegisterDate())
                .build();

        return todoMapper.save(todo); // save는 DTO를 받는게 아니라 entity를 받음
    }


    //조회
    public List<RespGetTodoListDto> getTodoList(String registerDate) {
        List<RespGetTodoListDto> respDtos = new ArrayList<>();

        List<Todo> todos = todoMapper.findByTodoListAll(registerDate);

        return todos.stream().map(Todo::toRespGetTodoDto).collect(Collectors.toList());
    }

    @Override
    public RespGetTodoDto getTodo(int todoId) {
            Todo todo = todoMapper.findByTodoId(todoId);
            return RespGetTodoDto.builder()
                    .todoId(todo.getTodoId())
                    .checkStatus(todo.getCheckStatus())
                    .content(todo.getContent())
                    .registerDate(todo.getRegisterDate())
                    .build();

    }

    //수정
    public int updateTodo(ReqUpdateTodoListDto reqDto) {

        return todoMapper.update(reqDto.toEntity());
    }

    //삭제
    public int deleteTodo(int todoId) { return todoMapper.delete(todoId);}
}
