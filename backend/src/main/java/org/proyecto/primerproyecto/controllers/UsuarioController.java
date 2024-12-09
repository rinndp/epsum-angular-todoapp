package org.proyecto.primerproyecto.controllers;

import org.proyecto.primerproyecto.models.Usuario;
import org.proyecto.primerproyecto.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll () {
        return ResponseEntity.ok(this.usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById (@PathVariable long id) {
        Optional<Usuario> usuario = usuarioService.getUserById(id);

        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/create/{username}/{password}/{name}/{email}/{edad}")
    public void createUser(@PathVariable String username,
                           @PathVariable String password,
                           @PathVariable String name,
                           @PathVariable String email,
                           @PathVariable int edad) {
        Usuario usuario = new Usuario();
        usuario.setUsername(username);
        usuario.setPassword(password);
        usuario.setName(name);
        usuario.setEmail(email);
        usuario.setAge(edad);
        this.usuarioService.createUser(usuario);
    }

    @GetMapping("/delete/{id}")
    public void deleteUser (@PathVariable long id) {
        this.usuarioService.deleteUser(id);
    }
}
