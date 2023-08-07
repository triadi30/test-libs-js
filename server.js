const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();


// Konfigurasi multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Rute untuk membuka halaman index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rute untuk membuka halaman untuk masing-masing library
app.get('/simpleupload', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_simpleupload.html'));
  });
  
  app.get('/dropzone', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_dropzone.html'));
  });
  
  app.get('/fineuploader', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_fineuploader.html'));
  });
  
  app.get('/filepond', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_filepond.html'));
  });
  
  app.get('/uppy', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_uppy.html'));
  });
  
  app.get('/jqueryfileupload', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_jqueryfileupload.html'));
  });
  
  app.get('/multer', (req, res) => {
    res.sendFile(path.join(__dirname, 'index_multer.html'));
  });
  

// Endpoint untuk menangani unggahan file
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    // File berhasil diunggah
    const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
    res.json({ fileUrl: fileUrl }); // Mengembalikan URL file sebagai respons
  } else {
    // File tidak ditemukan atau terjadi kesalahan saat mengunggah
    res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
  }
});

// Endpoint untuk menghandle unggahan file dengan SimpleUpload.js
app.post('/upload/simpleupload', upload.single('file'), (req, res) => {
    if (req.file) {
      // File berhasil diunggah
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ fileUrl });
    } else {
      // File tidak ditemukan atau terjadi kesalahan saat mengunggah
      res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
    }
  });
  
  // Endpoint untuk menghandle unggahan file dengan Dropzone.js
  app.post('/upload/dropzone', upload.single('file'), (req, res) => {
    if (req.file) {
      // File berhasil diunggah
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ fileUrl });
    } else {
      // File tidak ditemukan atau terjadi kesalahan saat mengunggah
      res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
    }
  });
  
  // Endpoint untuk menghandle unggahan file dengan Fine Uploader
  app.post('/upload/fineuploader', upload.single('qqfile'), (req, res) => {
    if (req.file) {
      // File berhasil diunggah
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ fileUrl });
    } else {
      // File tidak ditemukan atau terjadi kesalahan saat mengunggah
      res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
    }
  });
  
  // Endpoint untuk menghandle unggahan file dengan FilePond
  app.post('/upload/filepond', upload.single('filepond'), (req, res) => {
    if (req.file) {
      // File berhasil diunggah
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ fileUrl });
    } else {
      // File tidak ditemukan atau terjadi kesalahan saat mengunggah
      res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
    }
  });
  
  // Endpoint untuk menghandle unggahan file dengan Uppy
  app.post('/upload/uppy', upload.single('uppy'), (req, res) => {
    if (req.file) {
      // File berhasil diunggah
      const fileUrl = `/uploads/${req.file.filename}`;
      res.json({ fileUrl });
    } else {
      // File tidak ditemukan atau terjadi kesalahan saat mengunggah
      res.status(400).json({ error: 'Terjadi kesalahan saat mengunggah file.' });
    }
  });

// Endpoint untuk menampilkan file yang diunggah
app.get('/uploads/:filename', (req, res) => {
    const fileName = req.params.filename;
    res.sendFile(path.join(__dirname, 'uploads', fileName));
  });

// Endpoint untuk menampilkan file yang diunggah
app.get('/lib/:filename', (req, res) => {
    const fileName = req.params.filename;
    res.sendFile(path.join(__dirname, 'lib', fileName));
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
