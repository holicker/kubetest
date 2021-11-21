package com.spreadmat.vendor.web.rest.mapper;

import com.spreadmat.vendor.domain.Vendor;
import com.spreadmat.vendor.web.rest.dto.VendorDTO;
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
public class VendorMapperImpl implements VendorMapper {

    @Override
    public List<Vendor> toEntity(List<VendorDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Vendor> list = new ArrayList<Vendor>( dtoList.size() );
        for ( VendorDTO vendorDTO : dtoList ) {
            list.add( toEntity( vendorDTO ) );
        }

        return list;
    }

    @Override
    public List<VendorDTO> toDto(List<Vendor> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<VendorDTO> list = new ArrayList<VendorDTO>( entityList.size() );
        for ( Vendor vendor : entityList ) {
            list.add( toDto( vendor ) );
        }

        return list;
    }

    @Override
    public Vendor toEntity(VendorDTO vendorDTO) {
        if ( vendorDTO == null ) {
            return null;
        }

        Vendor vendor = new Vendor();

        vendor.setId( vendorDTO.getId() );
        vendor.setUserId( vendorDTO.getUserId() );
        vendor.setVendorName( vendorDTO.getVendorName() );
        vendor.setVendorDomain( vendorDTO.getVendorDomain() );
        vendor.setVendorInfo( vendorDTO.getVendorInfo() );
        vendor.setVendorLat( vendorDTO.getVendorLat() );
        vendor.setVendorLng( vendorDTO.getVendorLng() );
        vendor.setVendorState( vendorDTO.getVendorState() );

        return vendor;
    }

    @Override
    public VendorDTO toDto(Vendor vendor) {
        if ( vendor == null ) {
            return null;
        }

        VendorDTO vendorDTO = new VendorDTO();

        vendorDTO.setId( vendor.getId() );
        vendorDTO.setUserId( vendor.getUserId() );
        vendorDTO.setVendorName( vendor.getVendorName() );
        vendorDTO.setVendorDomain( vendor.getVendorDomain() );
        vendorDTO.setVendorInfo( vendor.getVendorInfo() );
        vendorDTO.setVendorLat( vendor.getVendorLat() );
        vendorDTO.setVendorLng( vendor.getVendorLng() );
        vendorDTO.setVendorState( vendor.getVendorState() );

        return vendorDTO;
    }
}
