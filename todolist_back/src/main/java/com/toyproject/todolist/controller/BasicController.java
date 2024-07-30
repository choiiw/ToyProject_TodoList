package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqGetInputDto;
import com.toyproject.todolist.dto.ReqRegisterInputDto;
import com.toyproject.todolist.dto.ReqUpdateTodoListDto;
//import com.toyproject.todolist.dto.RespGetInputDto;
//import com.toyproject.todolist.service.TodolistService;
import com.toyproject.todolist.service.TodolistServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class BasicController {

    @Autowired
    private TodolistServiceImpl todolistService;

    @PostMapping("/todolist/post")
    public ResponseEntity<?> registerApi(@RequestBody ReqRegisterInputDto reqDto) {
        return ResponseEntity.ok().body(todolistService.registerInput(reqDto));
    }

    @GetMapping("/todolist") // 조회
    public ResponseEntity<?> getApi(ReqGetInputDto reqDto) {
        return ResponseEntity.ok().body(todolistService.getInputList(reqDto));
    }

    @DeleteMapping("/todolist/delete") //
    public ResponseEntity<?> deleteApi(int listId) {
        return ResponseEntity.ok().body(todolistService.deleteTodoList(listId));
    }

    @PutMapping("/todolist/update") // 수정
    public ResponseEntity<?> updateApi(ReqUpdateTodoListDto reqDto) {
        return ResponseEntity.ok().body(todolistService.updateTodoList(reqDto));
    }

}
