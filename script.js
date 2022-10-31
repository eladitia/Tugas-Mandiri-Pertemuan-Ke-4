let sebelum = document.getElementById("sebelum")
    let upper = document.getElementById("upper")
    let lower = document.getElementById("lower")
    let ubahkata = document.getElementById("ubahkata")
    let panjang = document.getElementById("panjang")
    
    //Menampilkan teks Merah Putih
    let teks = "Merah Putih"
    sebelum.innerText = "Sebelum diubah : "+ teks

    //Menampilkan teks Uppercase
    let uppercase = teks.toUpperCase()
    upper.innerText = "Diubah menjadi Uppercase : " + uppercase

    //Menampilkan teks Lowercase
    let lowercase = teks.toLowerCase()
    lower.innerText = "Diubah menjadi Lowercase : " + lowercase

    //Mengubah kata "Putih" menjadi "Muda"
    let replace = teks.replace("Putih", "Muda")
    ubahkata.innerText = "Mengubah kata menjadi : " + replace

    //Menampilkan panjang string
    let length = replace.length;
    panjang.innerText = "Panjang stringnya adalah : " + length