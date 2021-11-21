package com.spreadmat.vendor.web.rest.mapper;

import com.spreadmat.vendor.domain.Merchandise;
import com.spreadmat.vendor.web.rest.dto.MerchandiseDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-11-21T15:02:22+0900",
    comments = "version: 1.4.1.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.2.jar, environment: Java 1.8.0_301 (Oracle Corporation)"
)
@Component
public class MerchandiseMapperImpl implements MerchandiseMapper {

    @Override
    public List<Merchandise> toEntity(List<MerchandiseDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Merchandise> list = new ArrayList<Merchandise>( dtoList.size() );
        for ( MerchandiseDTO merchandiseDTO : dtoList ) {
            list.add( toEntity( merchandiseDTO ) );
        }

        return list;
    }

    @Override
    public List<MerchandiseDTO> toDto(List<Merchandise> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<MerchandiseDTO> list = new ArrayList<MerchandiseDTO>( entityList.size() );
        for ( Merchandise merchandise : entityList ) {
            list.add( toDto( merchandise ) );
        }

        return list;
    }

    @Override
    public Merchandise toEntity(MerchandiseDTO merchandiseDTO) {
        if ( merchandiseDTO == null ) {
            return null;
        }

        Merchandise merchandise = new Merchandise();

        merchandise.setMerchandiseName( merchandiseDTO.getMerchandiseName() );
        merchandise.setMerchandiseDescription( merchandiseDTO.getMerchandiseDescription() );
        merchandise.setMerchandisePrice( merchandiseDTO.getMerchandisePrice() );
        merchandise.setId( merchandiseDTO.getId() );

        return merchandise;
    }

    @Override
    public MerchandiseDTO toDto(Merchandise merchandise) {
        if ( merchandise == null ) {
            return null;
        }

        MerchandiseDTO merchandiseDTO = new MerchandiseDTO();

        merchandiseDTO.setCurrentDate( merchandise.getRegisterdDate() );
        merchandiseDTO.setId( merchandise.getId() );
        merchandiseDTO.setMerchandiseName( merchandise.getMerchandiseName() );
        merchandiseDTO.setMerchandiseDescription( merchandise.getMerchandiseDescription() );
        merchandiseDTO.setMerchandisePrice( merchandise.getMerchandisePrice() );

        return merchandiseDTO;
    }
}
