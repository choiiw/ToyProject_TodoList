package com.toyproject.todolist.repository;

import com.toyproject.todolist.dto.ReqGetTodoListDto;
import com.toyproject.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TodoMapper {
     int save(Todo todo);
     List<Todo> findByTodoListAll(ReqGetTodoListDto reqGetTodoListDto);
     Todo findByTodoId(int id);
     int update(Todo todo);
     int delete(int id);
}
