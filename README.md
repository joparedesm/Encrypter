# Encrypter

## Description

## Tasks

### basic html structure

Header with title and social media, text, input fields and buttons in main, credits in footer

### basic css styles

flexbox, colors, fonts, background, etc.

### Encrypt/Decrypt logic (js)

Create an object with the vowels as keys and the corresponding words as values.

```javascript
const dict = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}
```

Receives a text, splits it into an array of characters, maps each character to the corresponding value in the dictionary or returns the character if it is not a lowercase vowel and finally joins the array into a string.

```javascript
const encrypt = (text) => {
    return text.split('').map((char) => {
        return dict[char] || char;
    }).join('');
}
```

Receives a text, replaces the words that match the pattern with the corresponding key in the dictionary or returns the word if it is not a word in the dictionary.

```javascript
const decrypt = (text) => {
    return text.replace(/ai|enter|imes|ober|ufat/gi, (matched) => {
        return Object.keys(dict).find(key => dict[key] === matched) || matched;
    });
}
```

### Restart Button

Button to clear the input field and text area and change the button to encrypt.

### Copy Button

Copy the text in the text area to the clipboard.

### Buttons and textArea effects

When the user clicks on the encrypt button, the text in the input field is encrypted and displayed in the text area to finally change the button to decrypt.

### textArea click effect

When the user clicks on the text area of the decrypted text, the button change to Encrypt and the text in the input field is encrypted and displayed in the text area.

### textArea enable/disable glass effect

### social media links

Github, LinkedIn, Twitter
