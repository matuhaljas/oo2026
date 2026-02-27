package ee.marcus.rendipood.dto;

import ee.marcus.rendipood.entity.FilmType;


public record FilmSaveDto(
        String title,
        FilmType type
) {
}
