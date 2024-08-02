package com.toyproject.todolist.repository;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
   int getUserById(String userName);
   List<RespUserDto> getTodoListByUserId(int userId);
}
