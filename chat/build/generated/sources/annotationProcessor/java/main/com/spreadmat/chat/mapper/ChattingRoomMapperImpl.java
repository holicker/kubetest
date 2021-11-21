package com.spreadmat.chat.mapper;

import com.spreadmat.chat.ChattingMessage;
import com.spreadmat.chat.ChattingRoom;
import com.spreadmat.chat.dto.ChattingRoomDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-15T11:02:29+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class ChattingRoomMapperImpl implements ChattingRoomMapper {

    @Override
    public List<ChattingRoom> toEntity(List<ChattingRoomDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<ChattingRoom> list = new ArrayList<ChattingRoom>( dtoList.size() );
        for ( ChattingRoomDTO chattingRoomDTO : dtoList ) {
            list.add( toEntity( chattingRoomDTO ) );
        }

        return list;
    }

    @Override
    public List<ChattingRoomDTO> toDto(List<ChattingRoom> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ChattingRoomDTO> list = new ArrayList<ChattingRoomDTO>( entityList.size() );
        for ( ChattingRoom chattingRoom : entityList ) {
            list.add( toDto( chattingRoom ) );
        }

        return list;
    }

    @Override
    public ChattingRoom toEntity(ChattingRoomDTO chattingRoomDTO) {
        if ( chattingRoomDTO == null ) {
            return null;
        }

        ChattingRoom chattingRoom = new ChattingRoom();

        List<ChattingMessage> list = chattingRoomDTO.getMessages();
        if ( list != null ) {
            chattingRoom.setMessages( new ArrayList<ChattingMessage>( list ) );
        }
        chattingRoom.setCreatedTime( chattingRoomDTO.getCreatedTime() );
        chattingRoom.setRoomId( chattingRoomDTO.getRoomId() );
        chattingRoom.setMerchandiseId( chattingRoomDTO.getMerchandiseId() );
        chattingRoom.setRoomName( chattingRoomDTO.getRoomName() );
        chattingRoom.setVendorDomain( chattingRoomDTO.getVendorDomain() );
        chattingRoom.setBuyerNickname( chattingRoomDTO.getBuyerNickname() );
        chattingRoom.setSellerNickname( chattingRoomDTO.getSellerNickname() );
        chattingRoom.setBuyerId( chattingRoomDTO.getBuyerId() );
        chattingRoom.setSellerId( chattingRoomDTO.getSellerId() );

        return chattingRoom;
    }

    @Override
    public ChattingRoomDTO toDto(ChattingRoom chattingRoom) {
        if ( chattingRoom == null ) {
            return null;
        }

        ChattingRoomDTO chattingRoomDTO = new ChattingRoomDTO();

        chattingRoomDTO.setRoomId( chattingRoom.getRoomId() );
        chattingRoomDTO.setMerchandiseId( chattingRoom.getMerchandiseId() );
        List<ChattingMessage> list = chattingRoom.getMessages();
        if ( list != null ) {
            chattingRoomDTO.setMessages( new ArrayList<ChattingMessage>( list ) );
        }
        chattingRoomDTO.setVendorDomain( chattingRoom.getVendorDomain() );
        chattingRoomDTO.setRoomName( chattingRoom.getRoomName() );
        chattingRoomDTO.setBuyerNickname( chattingRoom.getBuyerNickname() );
        chattingRoomDTO.setSellerNickname( chattingRoom.getSellerNickname() );
        chattingRoomDTO.setBuyerId( chattingRoom.getBuyerId() );
        chattingRoomDTO.setSellerId( chattingRoom.getSellerId() );
        chattingRoomDTO.setCreatedTime( chattingRoom.getCreatedTime() );

        return chattingRoomDTO;
    }
}
