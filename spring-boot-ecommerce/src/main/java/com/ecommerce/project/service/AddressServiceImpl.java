package com.ecommerce.project.service;

import com.ecommerce.project.exceptions.APIException;
import com.ecommerce.project.exceptions.ResourceNotFoundException;
import com.ecommerce.project.model.Address;
import com.ecommerce.project.model.User;
import com.ecommerce.project.payload.AddressDTO;
import com.ecommerce.project.repositories.AddressRepository;
import com.ecommerce.project.repositories.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public AddressDTO createAddress(AddressDTO addressDTO, User user) {

        Address address = modelMapper.map(addressDTO, Address.class);
        address.setUser(user);

        List<Address> addressesList = user.getAddresses();
        addressesList.add(address);

        user.setAddresses(addressesList);
        Address savedAddress = addressRepository.save(address);

        return modelMapper.map(savedAddress, AddressDTO.class);
    }

    @Override
    public List<AddressDTO> getAllAddresses() {

        List <Address> addresses = addressRepository.findAll();
        if (addresses.isEmpty()) {
            throw new APIException("no addresses found");
        }
        List<AddressDTO> addressDTOS = addresses.stream()
                .map(a -> modelMapper.map(a, AddressDTO.class)).toList();

        return addressDTOS;
    }

    @Override
    public AddressDTO getAddressById(Long addressId) {

        Address address = addressRepository.findById(addressId)
                .orElseThrow(()-> new ResourceNotFoundException("Address", "AddressId", addressId));
        AddressDTO addressDTO = modelMapper.map(address, AddressDTO.class);
        return addressDTO;
    }

    @Override
    public List <AddressDTO> getUserAddress(User user) {
        List <Address> addresses = user.getAddresses();
        if (addresses.isEmpty()) {
            throw new APIException("no addresses found");
        }
        List<AddressDTO> userAddressDTOS = addresses.stream()
                .map(a -> modelMapper.map(a, AddressDTO.class)).toList();

        return userAddressDTOS;
    }

    @Override
    public AddressDTO updateAddress(Long addressId, AddressDTO addressDTO) {
        Address addressFromDB = addressRepository.findById(addressId)
                .orElseThrow(()-> new ResourceNotFoundException("Address", "AddressId", addressId));

        Address address = modelMapper.map(addressDTO, Address.class);

        addressFromDB.setCity(address.getCity());
        addressFromDB.setCountry(address.getCountry());
        addressFromDB.setPincode(address.getPincode());
        addressFromDB.setStreet(address.getStreet());
        addressFromDB.setState(address.getState());
        addressFromDB.setBuildingName(address.getBuildingName());

        Address savedAddress = addressRepository.save(addressFromDB);

        User savedUser = addressFromDB.getUser();

        savedUser.getAddresses().removeIf(a -> a.getAddressId().equals(addressId));
        savedUser.getAddresses().add(savedAddress);

        userRepository.save(savedUser);

        return modelMapper.map(savedAddress, AddressDTO.class);
    }

    @Override
    public AddressDTO deleteAddressById(Long addressId) {
        Address address = addressRepository.findById(addressId)
                .orElseThrow(()-> new ResourceNotFoundException("Address", "AddressId", addressId));

        User savedUser = address.getUser();
        savedUser.getAddresses().removeIf(a -> a.getAddressId().equals(addressId));
        userRepository.save(savedUser);

        addressRepository.delete(address);

        return modelMapper.map(address, AddressDTO.class);
    }
}
