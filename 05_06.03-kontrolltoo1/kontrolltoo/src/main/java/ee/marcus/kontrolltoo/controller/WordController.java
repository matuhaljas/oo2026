package ee.marcus.kontrolltoo.controller;

import ee.marcus.kontrolltoo.entity.Word;
import ee.marcus.kontrolltoo.repository.WordRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class WordController {

    private final WordRepository wordRepository;

    //PUNKT 1

    @GetMapping("words")
    public List<Word> findAll() {
        return wordRepository.findAll();
    }

    @PostMapping("words")
    public ResponseEntity<String> addWord(@RequestBody Word word) {

        if (word.getWord() == null || word.getWord().isBlank()) {
            return ResponseEntity.badRequest().body("Sõna ei tohi olla tühi!");
        }

        if (word.getWord().length() < 2) {
            return ResponseEntity.badRequest().body("Sõna peab olema vähemalt 2 tähemärki pikk!");
        }

        wordRepository.save(word);
        return ResponseEntity.ok("Sõna salvestatud!");
    }

    //PUNKT 2

    // /cipher?shift=3
    @GetMapping("cipher")
    public List<String> cipherAll(@RequestParam int shift) {
        List<Word> words = wordRepository.findAll();

        List<String> result = new ArrayList<>();
        for (Word word : words) {
            result.add(caesarCipher(word.getWord(), shift));
        }
        return result;
    }

    //iga sõna nihe = sõna pikkus
    @GetMapping("cipher-by-length")
    public List<String> cipherByLength() {
        List<Word> words = wordRepository.findAll();

        List<String> result = new ArrayList<>();
        for (Word word : words) {
            int shift = word.getWord().length();
            result.add(caesarCipher(word.getWord(), shift));
        }
        return result;
    }

    @GetMapping("decipher-by-length")
    public List<String> decipherByLength() {
        List<Word> words = wordRepository.findAll();

        List<String> result = new ArrayList<>();
        for (Word word : words) {
            int shift = word.getWord().length();
            result.add(caesarCipher(word.getWord(), -shift));
        }
        return result;
    }

    //Caesar abifunktsioon
    private String caesarCipher(String text, int shift) {
        StringBuilder result = new StringBuilder();
        for (char ch : text.toCharArray()) {
            if (Character.isLetter(ch)) {
                char base = Character.isUpperCase(ch) ? 'A' : 'a';
                result.append((char) ((ch - base + shift) % 26 + base));
            } else {
                result.append(ch);
            }
        }
        return result.toString();
    }
}


