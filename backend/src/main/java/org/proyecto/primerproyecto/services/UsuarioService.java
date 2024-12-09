package org.proyecto.primerproyecto.services;

import org.proyecto.primerproyecto.models.Usuario;
import org.proyecto.primerproyecto.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usersRepository;

    public List<Usuario> findAll() {
        return usersRepository.findAll();
    }

    public Optional<Usuario> getUserById(Long id) {
        return this.usersRepository.findById(id);
    }

    public void createUser (Usuario user) {
        this.usersRepository.save(user);
    }

    public Usuario updateUser(Usuario user) {
        return this.usersRepository.save(user);
    }

    public void deleteUser(Long id) {
        this.usersRepository.deleteById(id);
    }

    public Optional<Usuario> getUserByUsername(String username) {
        return this.usersRepository.findByUsername(username);
    }
}
