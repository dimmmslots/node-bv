# OMDB API - BUKIT VISTA ONLINE ASSIGNMENT

## Description
API ini dibuat dengan tujuan untuk mencoba third-party API. API ini memanfaatkan API dari [OMDB](http://www.omdbapi.com/).

API ini memiliki 3 endpoint, yaitu:

## 1. GET /movies/:title
   Endpoint ini mencari film berdasarkan judul lagu yang dicantumkan pada segmen url. 
## 2. GET /movies/favorites
   Endpoint ini menampilkan daftar film yang telah disimpan pada database.
## 3. POST /movies/favorites
    Endpoint ini menyimpan film menjadi salah satu favorit user. Endpoint ini membutuhkan body request dengan format sebagai berikut:

    ```json
    {
        "title": "The Avengers",
    }
    ```

### Notes

- Semua endpoint hanya bisa diakses dengan menambahkan authorization header - Bearer Token dengan nilai token sama dengan nama salah satu user yang ada pada database.

- Jika ditemukan bahwa bearer token tidak tersedia pada authorization header, maka akan muncul pesan error FORBIDDEN.

- Begitu juga ketika bearer token ditemukan namun tidak sesuai dengan nama user yang ada pada database, maka akan muncul pesan error UNAUTHORIZED.



# SETUP

1. Buat database dengan nama nodebv
2. Impor data dengan file sql yang sudah disediakan pada project ini
3. Jalankan program dengan mengetikkan 
   
   ```bash
   npm run dev
   ```