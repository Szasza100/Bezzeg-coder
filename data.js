window.morseMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};
window.reverseMorseMap = Object.fromEntries(Object.entries(window.morseMap).map(([k, v]) => [v, k]));

window.secretDict = [
    'if', 'else', 'function', 'return', 'var', 'let', 'const', 'for', 'while', 'do',
    'break', 'continue', 'switch', 'case', 'default', 'try', 'catch', 'finally',
    'class', 'extends', 'super', 'import', 'export', 'from', 'true', 'false',
    'null', 'undefined', 'NaN', 'console', 'log', 'document', 'window',
    'getElementById', 'querySelector', 'addEventListener', 'Math', 'random',
    'length', 'push', 'pop', 'shift', '===', '!==', '==', '!=', '=>', '<=', '>=', '&&', '||',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ' ', '.', ',', ';', ':', '!', '?', '(', ')', '{', '}', '[', ']', '=', '+', '-', '*', '/', '%', '<', '>', '&', '|', '^', '~',
    '"', "'", '`', '\\', '@', '#', '$', '_', '\n', '\t',
    'á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű', 'Á', 'É', 'Í', 'Ó', 'Ö', 'Ő', 'Ú', 'Ü', 'Ű'
];