package com.toyproject.todolist.repository;

import com.toyproject.todolist.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface InputMapper {
     int save(TodoList todoList);
     List<TodoList> findByTodoListAll(TodoList todoList);
     List<TodoList> findByTodoListChecked(TodoList todoList);
     int update(TodoList todoList);
     int delete(int listId);
}
