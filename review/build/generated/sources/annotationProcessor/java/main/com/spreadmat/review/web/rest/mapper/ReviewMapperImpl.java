package com.spreadmat.review.web.rest.mapper;

import com.spreadmat.review.domain.Review;
import com.spreadmat.review.web.rest.dto.ReviewDTO;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-22T00:31:01+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class ReviewMapperImpl implements ReviewMapper {

    @Override
    public List<Review> toEntity(List<ReviewDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Review> list = new ArrayList<Review>( dtoList.size() );
        for ( ReviewDTO reviewDTO : dtoList ) {
            list.add( toEntity( reviewDTO ) );
        }

        return list;
    }

    @Override
    public List<ReviewDTO> toDto(List<Review> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<ReviewDTO> list = new ArrayList<ReviewDTO>( entityList.size() );
        for ( Review review : entityList ) {
            list.add( toDto( review ) );
        }

        return list;
    }

    @Override
    public Review toEntity(ReviewDTO reviewDTO) {
        if ( reviewDTO == null ) {
            return null;
        }

        Review review = new Review();

        review.setContent( reviewDTO.getBody() );
        if ( reviewDTO.getRegisterdDate() != null ) {
            review.setRegisterdDate( LocalDate.parse( reviewDTO.getRegisterdDate() ) );
        }
        review.setId( reviewDTO.getId() );
        review.setVendorId( reviewDTO.getVendorId() );
        review.setWriter( reviewDTO.getWriter() );
        review.setTitle( reviewDTO.getTitle() );

        return review;
    }

    @Override
    public ReviewDTO toDto(Review review) {
        if ( review == null ) {
            return null;
        }

        ReviewDTO reviewDTO = new ReviewDTO();

        reviewDTO.setBody( review.getContent() );
        reviewDTO.setId( review.getId() );
        reviewDTO.setVendorId( review.getVendorId() );
        reviewDTO.setTitle( review.getTitle() );
        reviewDTO.setWriter( review.getWriter() );
        if ( review.getRegisterdDate() != null ) {
            reviewDTO.setRegisterdDate( DateTimeFormatter.ISO_LOCAL_DATE.format( review.getRegisterdDate() ) );
        }

        return reviewDTO;
    }
}
