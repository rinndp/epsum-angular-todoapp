package org.proyecto.primerproyecto.services;

import org.proyecto.primerproyecto.models.Rol;
import org.proyecto.primerproyecto.repositories.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService {

    @Autowired
    private RolRepository rolRepository;

    public List<Rol> getAllRoles () {
        return rolRepository.findAll();
    }

    public Optional<Rol> getRole (Long rolId) {
        return rolRepository.findById(rolId);
    }

    public void deleteRole (Long rolId) {
        rolRepository.deleteById(rolId);
    }

    public Rol updateRole (Rol rol) {
        return rolRepository.save(rol);
    }

    public void CreateRole (Rol rol) {
        rolRepository.save(rol);
    }
}
