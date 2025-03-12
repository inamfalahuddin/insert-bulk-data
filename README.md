
# Insert Bulk Data Tarif AHIS

Untuk menjalankan ikuti perintah dibawah ini, pastikan sudah memperbarui kode yg terbaru. gunakan node js versi 20.14.x


## Authors

- [@inamfalahuddin](https://www.github.com/inamfalahuddin)


## Installation

Install my-project with npm

```bash
  npm install
```

Ubah folder sesuai dengan data yang ingin di konversi. ubah pada file env.js

```
const DIR = "tamsel";
 // Atau ubah ke babelan untuk folder babelan
const DIR = "tamsel";
```

Untuk mengecek ada berapa total row data tsb dan apakah tidak ada error. jalankan perintah
```
node check
```

Untuk menggenerate hasil json sesuai dengan input REST API yg di inginkan gunakan perintah
```
node generate
```

Untuk mengirim data ke REST API harap ubah konfigurasi pada .env dan berikan cookie disana. kemudian jalankan perintah dibawah untuk mengirim data ke server.
```
node push
```