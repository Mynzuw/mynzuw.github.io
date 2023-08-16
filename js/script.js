function hitungLuas() {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const luas = 0.5 * alas * tinggi;

    document.getElementById("Luas").textContent = luas.toFixed(2);
}

function hitungKeliling() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);

    const keliling = sisiA + sisiB + sisiC;

    document.getElementById("Keliling").textContent = keliling.toFixed(2);
}
