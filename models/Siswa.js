const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan Nama'],
        
    },

    nis_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan NIS'],
        
    },

    kelas_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan Kelas'],
        
    },
    
    alamat_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan Alamat'],
        
    },

    tanggal_lahir_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan Tanggal Lahir'],
        
    },

    golongan_darah_siswa: {
        type: String,
        required: [true, 'Silahkan Isikan Golongan Darah'],
        
    },
})

module.exports = mongoose.model('siswa', UserSchema)