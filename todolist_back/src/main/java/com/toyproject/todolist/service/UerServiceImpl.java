package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UerServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Override
    public int getUserId(String userName) {
        return userMapper.getUserById(userName);
    }

    @Override
    public List<RespUserDto> getTodoList(int userId) {
        return userMapper.getTodoListByUserId(userId);
    }
}
