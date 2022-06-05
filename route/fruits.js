const router = require('express').Router();

function getRegisteredAPI () {
    return ['abcd','cdaf','caaf'];
}

function isInputValid (input) {
    var apiKey = input["api_key"];
    if(getRegisteredAPI().includes(apiKey)){
        return true;
    }else {
        return false
    }
}

function jsonOutput(){
    return [
        {
            id: '1',
            fruitName: 'Jeruk',
            desc: 'Jeruk atau dikenal dengan nama latin Citrus merupakan tumbuhan berbuah dengan tingkat keasaman dan rasa manis yang berbeda. Rasa asam dan manis pada jeruk tergantung dari tingkat kematangan. Rasa asam pada buah tersebut berasaka dari asam sitrat. Jeruk beraasal daru Asia khususnya Asia Tenggara dengan jenis yang beraneka ragam. Jeruk memiliki khasiat dalam Kesehatan manusia, di antaranya adalah sebagai sumber vitamin C dan juga digunakan pada industry.',
            tips: ['1) Menyimpan jeruk di dalam plastic dan memasukkan ke dalam freezer untuk mencegah terjadinya pembusukan', '2) Menunggu jeruk hingga matang agar menghasilkan rasa manis yang alami.'],
            img: 'https://storage.googleapis.com/fruit-api-352215.appspot.com/apel.jpg'
        },
        {
            id: '2',
            fruitName: 'Pisang',
            desc: 'Pisang atau dikenal dengan nama latin Musa paradisiaca merupakan tanaman berbuah yang tumbuh di daerah tropis, salah satunya Indonesia. Tumbuhan ini tergolong ke dalam tumbuhan monokotil karena berbiji tunggal dan tidak berkayu. Pisang memiliki kemampuan tumbuh dan berkembang di dataran dengan ketinggian 100 meter di atas permukaan laut dengan keadaan tanah yang lembab. Buah pisang memiliki fase kematangan dengan memperlihatkan  perbedaan warna mulai dari hijau hingga menguning. Khasiat yang didapat dari pisang sangat banyak, salah satunya adalah di bidang Kesehatan karena mengandung serat yang tinggi untuk melancarkan pencernaan.',
            tips: ['1) Merendam buah pisang di dalam air dingin.',' 2) Menyimpan pisang di dalam plastic dan memasukkan ke dalam freezer untuk mencegah terjadinya pembusukan.'],
            img: 'https://storage.googleapis.com/fruit-api-352215.appspot.com/pisang.jpg'
        },
        {
            id: '3',
            fruitName: 'Apel',
            desc: 'Apel atau dikenal dengan nama latin Malus domestice merupakan tumbuhan berbuah yang tersebar di Asia Tenggara. Apel memiliki banyak sekali khasiat untuk tubuh manusia di antaranya adalah memperlancar saluran pencernaan dengan mencegah konstipasi, menjaga kesehatan jantung, mencegah terjadinya diabetes, dan mampu menrunkan berat badan. Apel memiliki jenis yang beragam. Beberapa adaerah di Indonesia, memiliki morfologi apel yang berbeda ketika memasuki proses kematangan. ',
            tips: ['1) Merendam buah apel di dalam air dingin.', '2) Sebelum mengonsumi, rendam di dalam air gula selama 10 menit untuk meningkatkan rasa manis yang lebih tinggi lagi.', '3) Menyimpan apel di dalam plastic dan memasukkan ke dalam freezer untuk mencegah terjadinya pembusukan.'],
            img: 'https://storage.googleapis.com/fruit-api-352215.appspot.com/apel.jpg'
        }]
}

router.get('/', (req,res) => {
    if(isInputValid(req.query)){
        res
        .status(200)
        .json(jsonOutput());
    }else{
        return res.json({ message: 'Wrong API Key'});
    }
});



module.exports = router;