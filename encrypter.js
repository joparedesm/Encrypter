const text = document.getElementById('input');
const encryptedText = document.getElementById('output');
const btn = document.getElementById('btn');
const btnClear = document.getElementById('btnClear');
text.focus();

const dict = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}

const encrypt = (text) => {
    return text.split('').map((char) => {
        return dict[char] || char;
    }).join('');
}

const decrypt = (text) => {
    return text.replace(/ai|enter|imes|ober|ufat/gi, (matched) => {
        return Object.keys(dict).find(key => dict[key] === matched);
    });
}

const clear = () => {
    text.value = '';
    encryptedText.value = '';
    btn.innerText = 'Encrypt';
    btn.disabled = true;
    btn.style.cursor = 'default';
    btn.style.opacity = '0.2';
    btnClear.disabled = true;
    btnClear.style.cursor = 'default'; // <-- this line must be changed
    btnClear.style.opacity = '0.2';
    btnClear.removeEventListener('click', clear);
    text.disabled = false;
    text.placeholder = 'Enter your text to be encrypted'
    encryptedText.disabled = true;
    encryptedText.placeholder = ''
    text.focus();
}


text.addEventListener('input', () => {
    btn.disabled = false;
    btnClear.disabled = false;
    btn.style.cursor = 'pointer';
    btn.style.opacity = '1';
    btnClear.style.opacity = '1';
    btnClear.style.cursor = 'pointer';
    btnClear.removeEventListener('click', clear);
    btnClear.addEventListener('click', clear);

    if (text.value === '') {
        text.placeholder = 'Enter your text to be encrypted'
        encryptedText.placeholder = ''
    }
})

btn.addEventListener('click', () => {
    if (btn.innerText === 'Encrypt' && text.value !== '') {
        encryptedText.value = encrypt(text.value);
        btn.innerText = 'Decrypt';
        text.value = '';
        btn.style.backgroundColor = '#000';
        btn.style.color = '#fff';
        text.disabled = true;
        encryptedText.disabled = false;
        encryptedText.focus();
        text.placeholder = 'Encrypted!';
    } else if (btn.innerText === 'Decrypt' && encryptedText.value !== '') {
        text.value = decrypt(encryptedText.value);
        btn.innerText = 'Encrypt';
        encryptedText.value = '';
        btn.style.backgroundColor = '#fff';
        btn.style.color = '#121212';
        text.disabled = false;
        encryptedText.disabled = true;
        text.focus();
        encryptedText.placeholder = 'Decrypted!';
    }

    if (text.value === '' && encryptedText.value === '') {
        btn.disabled = true;
        btn.style.cursor = 'default';
        btn.style.opacity = '0.2';
        btnClear.disabled = true;
        btnClear.style.cursor = 'default';
        btnClear.style.opacity = '0.2';
        btnClear.removeEventListener('click', clear);
        text.disabled = false;
        text.placeholder = 'Enter your text to be encrypted'
        encryptedText.disabled = true;
        encryptedText.placeholder = ''
        text.focus();
    }
})





