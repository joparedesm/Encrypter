const text = document.getElementById('input');
const encryptedText = document.getElementById('output');
const btn = document.getElementById('btn');
const btnClear = document.getElementById('btnClear');
const btnCopy = document.querySelectorAll('.btnCopy');


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
        return Object.keys(dict).find(key => dict[key] === matched) || matched;
    });
}

const clear = () => {
    text.value = '';
    encryptedText.value = '';
    text.className += ' clearText';
    btn.innerText = 'Encrypt';
    btn.disabled = true;
    btn.style.backgroundColor = '#f1f1f1';
    btn.style.color = '#121212'
    btnClear.disabled = true;
    btnClear.removeEventListener('click', clear);
    text.disabled = false;
    text.placeholder = 'Enter your text to be encrypted'
    encryptedText.disabled = true;
    encryptedText.placeholder = ''
    btnCopy.forEach((btn) => {btn.style.display = 'none'})
    text.focus();
}


text.addEventListener('input', () => {
    btn.disabled = false;
    btnClear.disabled = false;
    btn.style.backgroundColor = '#f1f1f1';
    btn.style.color = '#121212'
    btnClear.removeEventListener('click', clear);
    btnClear.addEventListener('click', clear);
    btnCopy[0].style.display = 'block';

    if (text.value === '' && btn.value === 'Encrypt') {
        text.placeholder = 'Enter your text to be encrypted'
        encryptedText.placeholder = ''
        btnCopy.map((btn) => {btn.style.display = 'none'})
    }
})

btn.addEventListener('click', () => {
    if (btn.innerText === 'Encrypt' && text.value !== '') {
        encryptedText.value = encrypt(text.value);
        btn.innerText = 'Decrypt';
        text.value = '';
        btn.style.backgroundColor = '#121212';
        btn.style.color = '#f1f1f1';
        text.disabled = true;
        encryptedText.disabled = false;
        encryptedText.focus();
        text.placeholder = 'Encrypted!';
        btnCopy[1].style.display = 'block';
        btnCopy[0].style.display = 'none';
    } else if (btn.innerText === 'Decrypt' && encryptedText.value !== '') {
        text.value = decrypt(encryptedText.value);
        btn.innerText = 'Encrypt';
        encryptedText.value = '';
        btn.style.backgroundColor = '#f1f1f1';
        btn.style.color = '#121212';
        text.disabled = false;
        encryptedText.disabled = true;
        text.focus();
        encryptedText.placeholder = 'Decrypted!';
        btnCopy[0].style.display = 'block';
        btnCopy[1].style.display = 'none';
    }

    if (text.value === '' && encryptedText.value === '') {
        clear();
    }
})

// Click btn when Enter key is pressed
text.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click();
    }
})

encryptedText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        btn.click();
    }
})

// Add copy button
const copyContent = async (e) => {
    e.stopPropagation();
    console.log(e.currentTarget.previousElementSibling.value);
    try{
        await navigator.clipboard.writeText(e.currentTarget.previousElementSibling.value);
    } catch (err) {
        console.log(err);
    }
}

btnCopy[0].addEventListener('click', copyContent);
btnCopy[1].addEventListener('click', copyContent);


// Add a click event to encryptedText
const encryptedTextActivate = (e) => {
    console.log(text.value)
    if ( !encryptedText.disabled ) return;
    if ( text.value !== '' ) { btn.click(); return; }
    text.disabled = true;
    text.value = "";
    text.placeholder = "";
    btn.disabled = true;
    btnClear.disabled = true;
    encryptedText.disabled = false;
    btn.innerText = 'Decrypt';
    btn.style.backgroundColor = '#121212';
    btn.style.color = '#f1f1f1';
    encryptedText.focus();
    encryptedText.placeholder = 'Enter your text to be decrypted';
    btnCopy[1].style.display = 'block';
    btnCopy[0].style.display = 'none';
}

encryptedText.addEventListener('input', () => {
    btn.disabled = false;
    btnClear.disabled = false;
    btn.style.backgroundColor = '#121212';
    btn.style.color = '#f1f1f1'
    btn.innerHTML = "Decrypt"
    btnClear.removeEventListener('click', clear);
    btnClear.addEventListener('click', clear);
    btnCopy[1].style.display = 'block';

    if (text.value === '' && btn.innerText === 'Decrypt') {
        encryptedText.placeholder = 'Enter your text to be decrypted'
        text.placeholder = ''
        btnCopy.map((btn) => {btn.style.display = 'none'})

    }
})

const textActivate = (e) => {
    if ( !text.disabled ) return;
    if ( encryptedText.value !== '' ) { btn.click(); return; }
    clear();
    btnCopy[0].style.display = 'block';
    btnCopy[1].style.display = 'none';

}

