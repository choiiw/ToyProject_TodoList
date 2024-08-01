package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqUserDto;
import com.toyproject.todolist.dto.RespUserDto;
import com.toyproject.todolist.entity.User;
import com.toyproject.todolist.repository.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UerServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Override
    public RespUserDto login(ReqUserDto reqUserDto) {

        User user = userMapper.getUserById(reqUserDto);

                return RespUserDto.builder()
                .userName(user.getUserName())
                .password(user.getPassword())
                .build();


    }
}
