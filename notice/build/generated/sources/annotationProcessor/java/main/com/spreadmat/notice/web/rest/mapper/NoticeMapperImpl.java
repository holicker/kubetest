package com.spreadmat.notice.web.rest.mapper;

import com.spreadmat.notice.domain.Notice;
import com.spreadmat.notice.web.rest.dto.NoticeDTO;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-15T11:03:25+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class NoticeMapperImpl implements NoticeMapper {

    @Override
    public List<Notice> toEntity(List<NoticeDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Notice> list = new ArrayList<Notice>( dtoList.size() );
        for ( NoticeDTO noticeDTO : dtoList ) {
            list.add( toEntity( noticeDTO ) );
        }

        return list;
    }

    @Override
    public List<NoticeDTO> toDto(List<Notice> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<NoticeDTO> list = new ArrayList<NoticeDTO>( entityList.size() );
        for ( Notice notice : entityList ) {
            list.add( toDto( notice ) );
        }

        return list;
    }

    @Override
    public Notice toEntity(NoticeDTO noticeDTO) {
        if ( noticeDTO == null ) {
            return null;
        }

        Notice notice = new Notice();

        notice.setContent( noticeDTO.getBody() );
        if ( noticeDTO.getRegisterdDate() != null ) {
            notice.setRegisterdDate( LocalDate.parse( noticeDTO.getRegisterdDate() ) );
        }
        notice.setId( noticeDTO.getId() );
        notice.setWriter( noticeDTO.getWriter() );
        notice.setTitle( noticeDTO.getTitle() );

        return notice;
    }

    @Override
    public NoticeDTO toDto(Notice notice) {
        if ( notice == null ) {
            return null;
        }

        NoticeDTO noticeDTO = new NoticeDTO();

        noticeDTO.setBody( notice.getContent() );
        noticeDTO.setId( notice.getId() );
        noticeDTO.setTitle( notice.getTitle() );
        noticeDTO.setWriter( notice.getWriter() );
        if ( notice.getRegisterdDate() != null ) {
            noticeDTO.setRegisterdDate( DateTimeFormatter.ISO_LOCAL_DATE.format( notice.getRegisterdDate() ) );
        }

        return noticeDTO;
    }
}
