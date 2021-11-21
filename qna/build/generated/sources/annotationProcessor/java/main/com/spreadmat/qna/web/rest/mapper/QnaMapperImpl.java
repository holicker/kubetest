package com.spreadmat.qna.web.rest.mapper;

import com.spreadmat.qna.domain.Qna;
import com.spreadmat.qna.web.rest.dto.QnaDTO;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-15T11:03:47+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class QnaMapperImpl implements QnaMapper {

    @Override
    public List<Qna> toEntity(List<QnaDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Qna> list = new ArrayList<Qna>( dtoList.size() );
        for ( QnaDTO qnaDTO : dtoList ) {
            list.add( toEntity( qnaDTO ) );
        }

        return list;
    }

    @Override
    public List<QnaDTO> toDto(List<Qna> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<QnaDTO> list = new ArrayList<QnaDTO>( entityList.size() );
        for ( Qna qna : entityList ) {
            list.add( toDto( qna ) );
        }

        return list;
    }

    @Override
    public Qna toEntity(QnaDTO qnaDTO) {
        if ( qnaDTO == null ) {
            return null;
        }

        Qna qna = new Qna();

        qna.setContent( qnaDTO.getBody() );
        if ( qnaDTO.getRegisterdDate() != null ) {
            qna.setRegisterdDate( LocalDate.parse( qnaDTO.getRegisterdDate() ) );
        }
        qna.setId( qnaDTO.getId() );
        qna.setVendorId( qnaDTO.getVendorId() );
        qna.setWriter( qnaDTO.getWriter() );
        qna.setTitle( qnaDTO.getTitle() );

        return qna;
    }

    @Override
    public QnaDTO toDto(Qna qna) {
        if ( qna == null ) {
            return null;
        }

        QnaDTO qnaDTO = new QnaDTO();

        qnaDTO.setBody( qna.getContent() );
        qnaDTO.setId( qna.getId() );
        qnaDTO.setVendorId( qna.getVendorId() );
        qnaDTO.setTitle( qna.getTitle() );
        qnaDTO.setWriter( qna.getWriter() );
        if ( qna.getRegisterdDate() != null ) {
            qnaDTO.setRegisterdDate( DateTimeFormatter.ISO_LOCAL_DATE.format( qna.getRegisterdDate() ) );
        }

        return qnaDTO;
    }
}
