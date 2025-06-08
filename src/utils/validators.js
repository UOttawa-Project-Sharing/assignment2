// Simple email regex for validation
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple location regex: at least 2 words with at least 5 characters total (basic, not geocoding)
function isLikelyLocation(address) {
    return /^(\s*\S+\s+){1,}\S{2,}/.test(address) && address.trim().length >= 5;
}

// Simple credit card regex (Visa, MasterCard, Amex, etc. - for demo only)
function isValidCardNumber(number) {
    return /^[0-9]{13,19}$/.test(number.replace(/\s/g, ""));
}
function isValidExpiry(exp) {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(exp);
}
function isValidCVC(cvc) {
    return /^[0-9]{3,4}$/.test(cvc);
}

export { isValidEmail, isLikelyLocation, isValidCardNumber, isValidExpiry, isValidCVC };