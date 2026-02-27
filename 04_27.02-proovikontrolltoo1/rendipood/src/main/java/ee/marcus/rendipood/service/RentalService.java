package ee.marcus.rendipood.service;

import ee.marcus.rendipood.entity.Film;

public class RentalService {

}
    public int calculatePrice(Film film, int days){

        switch (film.getType()) {

            case NEW_RELEASE:
                return 4 * days;

            case REGULAR:

        }
