package com.spreadmat.auth.web.rest;

import com.spreadmat.auth.domain.User;
import com.spreadmat.auth.service.MemberService;
import com.spreadmat.auth.web.rest.dto.UserDTO;
import com.spreadmat.auth.web.rest.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping(path = "member", produces = "application/json")
@CrossOrigin(origins = {"http://ae4c6f9f00c0f407297acb4d7542f902-304088184.ap-northeast-2.elb.amazonaws.com", "http://10.40.182.13:3000"})
public class MemberController {

    @Autowired private MemberService memberService;
    @Autowired private UserMapper userMapper;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerMember(@RequestBody UserDTO userDTO){
        log.info("Member DTO : {}", userDTO);
        User user = userMapper.toEntity(userDTO.passwordEncrypt(passwordEncoder));
        User registerdUser = memberService.createUser(user);
        UserDTO responseDTO = userMapper.toDto(registerdUser);
        log.info("Response DTO : {}", responseDTO);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/test")
    public ResponseEntity<UserDTO> idTest(@AuthenticationPrincipal String userId){
        log.info("userId : {}", userId);

        if (userId != "anonymousUser") {
            User resultUser = memberService.findOneByUsername(userId);
            UserDTO resultUserDTO = userMapper.toDto(resultUser).passwordSecret();
            return new ResponseEntity<UserDTO>(resultUserDTO,HttpStatus.OK);
        }

        return ResponseEntity.badRequest().build();

    }

    @GetMapping("/{userid}")
    @ResponseBody
    public ResponseEntity<String> idToNickname(@PathVariable("userid") Long userid){
        User resultUser = memberService.findById(userid).get();
        return new ResponseEntity<String>(resultUser.getNickname(),HttpStatus.OK);

    }

}
