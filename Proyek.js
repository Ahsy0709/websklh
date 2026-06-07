function toggleText(button) {

            const moreText =
                button.previousElementSibling
                      .querySelector(".moreText");

            if (moreText.style.display === "inline") {
                moreText.style.display = "none";
                button.textContent = "Baca Selengkapnya...";
            }
            else {
                moreText.style.display = "inline";
                button.textContent = "Baca lebih sedikit";
            }
        }


        const form = document.getElementById("guestForm");

    form.addEventListener("submit", function(e){
      e.preventDefault();

      // Ambil data input
      const nama = document.getElementById("nama").value;
      const kelas = document.getElementById("kelas").value;
      const pesan = document.getElementById("pesan").value;

      // Tampilkan hasil
      document.getElementById("outNama").textContent = nama;
      document.getElementById("outKelas").textContent = kelas;
      document.getElementById("outPesan").textContent = pesan;

      document.getElementById("hasil").style.display = "block";

      // Reset form
      form.reset();
    });