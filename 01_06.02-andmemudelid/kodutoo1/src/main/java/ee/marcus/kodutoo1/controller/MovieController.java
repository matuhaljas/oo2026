package ee.marcus.kodutoo1.controller;

import ee.marcus.kodutoo1.entity.Movie;
import ee.marcus.kodutoo1.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class MovieController {

    // localhost:9090/movies
    @Autowired
    private MovieRepository movieRepository;

    //filmide leidmine andmebaasist
    @GetMapping("movies")
    public List<Movie> getMovie(){
        return movieRepository.findAll();
    }

    //filmide kustutamine andmebaasist
    @DeleteMapping("movies/{id}")
    public List<Movie> deleteMovie(@PathVariable Long id){
        movieRepository.deleteById(id); //siin kustutab
        return movieRepository.findAll(); //tagastab koik alles jaanud filmid andmebaasist
    }

    //filmide uleslaadimine andmebaasi
    @PostMapping("movies")
    public List<Movie> addMovie(@RequestBody Movie movie){
        movieRepository.save(movie); //siin salvestab
        return movieRepository.findAll(); //tagastab koik filmid andmebaasis
    }
}
