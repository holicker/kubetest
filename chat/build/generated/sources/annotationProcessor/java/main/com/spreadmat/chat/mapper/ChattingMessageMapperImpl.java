package com.spreadmat.chat.mapper;

import com.spreadmat.chat.ChattingMessage;
import com.spreadmat.chat.dto.ChattingMessageDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-22T01:59:28+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class ChattingMessageMapperImpl implements ChattingMessageMapper {

    @Override
    public List<ChattingMessage> toEntity(List<ChattingMessageDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<ChattingMessage> list = new ArrayList<ChattingMessage>( dtoList.size() );
        for ( ChattingMessageDTO chattingMessageDTO : dtoList ) {
            list.add( toEntity( chattingMessageDTO ) );
        }

        return list;
    }

    @Override
    public List<ChattingMessageDTO> toDto(List<ChattingMessage> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ChattingMessageDTO> list = new ArrayList<ChattingMessageDTO>( entityList.size() );
        for ( ChattingMessage chattingMessage : entityList ) {
            list.add( toDto( chattingMessage ) );
        }

        return list;
    }

    @Override
    public ChattingMessage toEntity(ChattingMessageDTO chattingMessageDTO) {
        if ( chattingMessageDTO == null ) {
            return null;
        }

        ChattingMessage chattingMessage = new ChattingMessage();

        chattingMessage.setChattedTime( chattingMessageDTO.getChattedTime() );
        chattingMessage.setMessageId( chattingMessageDTO.getMessageId() );
        chattingMessage.setWriter( chattingMessageDTO.getWriter() );
        chattingMessage.setMessage( chattingMessageDTO.getMessage() );

        return chattingMessage;
    }

    @Override
    public ChattingMessageDTO toDto(ChattingMessage chattingMessage) {
        if ( chattingMessage == null ) {
            return null;
        }

        ChattingMessageDTO chattingMessageDTO = new ChattingMessageDTO();

        chattingMessageDTO.setMessageId( chattingMessage.getMessageId() );
        chattingMessageDTO.setMessage( chattingMessage.getMessage() );
        chattingMessageDTO.setWriter( chattingMessage.getWriter() );
        chattingMessageDTO.setChattedTime( chattingMessage.getChattedTime() );

        return chattingMessageDTO;
    }
}
