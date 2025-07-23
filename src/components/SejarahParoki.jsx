import React from 'react';
import { Container } from 'react-bootstrap';
import './SejarahParoki.css'; // Kita akan membuat file CSS terpisah untuk layout page ini
import TopNavbar from './TopNavbar'; // Asumsi TopNavbar akan selalu ada di semua halaman
import BottomContent from './BottomContent'; // Asumsi BottomContent (footer) juga akan selalu ada

const SejarahParoki = () => {
  return (
    <div className="sejarah-paroki-page">
      <TopNavbar /> {/* Menampilkan navbar di bagian atas */}

      <Container className="sejarah-content-wrapper my-5 p-4 p-md-5">
        <h1 className="sejarah-title text-center mb-4">Sejarah Misi Katolik di Keuskupan Ketapang</h1>
        <h2 className="sejarah-subtitle text-center mb-5">Dari Jejak Perintis hingga Komunitas Mandiri</h2>

        <div className="sejarah-paragraph mb-4">
          <p>Langkah awal misi Katolik di Keuskupan Ketapang terukir pada tahun 1910, saat keluarga Tionghoa Katolik dari Singapura dan Pontianak menjejakkan kaki di tanah ini. Mereka bukan hanya mencari penghidupan baru, tetapi juga membawa serta benih iman Katolik yang teguh. Keluarga-keluarga seperti Tan A Hak, Tan A Ni, dan Tan Kau Pue, dikenal akan kesetiaan mereka, menjadi fondasi awal komunitas Katolik. Tak lama berselang, para Pastor Kapusin, dengan ciri khas janggut dan jubah cokelat mereka, tiba untuk memperkuat misi. Pastor P. Pacificus Bos dan Pastor P. Canisius Pijnappels memimpin upaya pembangunan gereja dan sekolah di pusat-pusat kota seperti Ketapang, Sukadana, dan Teluk Melano, di mana komunitas Tionghoa Katolik berkembang pesat dan mulai membeli tanah untuk mendirikan fasilitas pendidikan.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Misi Katolik kemudian meluas ke berbagai penjuru, termasuk Pulau Kumbang dan daerah pedalaman seperti Simpang Dua dan Nanga Tayap. Namun, penyebaran iman tidaklah mudah. Mereka menghadapi resistensi dari beberapa kelompok Dayak dan Melayu yang memandang agama Katolik sebagai bagian dari kolonialisme Belanda. Meskipun demikian, Mgr. Van Valenberg, OFM.Cap, dengan visi yang jauh ke depan, meminta Pastor Passionis untuk berkarya di Kalimantan Barat. Para misionaris awal ini, seperti P. Donatus Dunsellmann dan P. Elias, tidak hanya berdakwah tetapi juga aktif dalam pembangunan sosial, mendirikan sekolah di Tanjung dan Serengkah, bahkan mendokumentasikan perjalanan misi mereka melalui film, menunjukkan dedikasi yang mendalam terhadap evangelisasi dan pembangunan komunitas yang berkelanjutan.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Dalam perjalanan sejarahnya, misi Katolik di Ketapang terus mengukir jejak. Pada tahun 1938, Gereja berhasil membeli tanah untuk pembangunan gereja dan pastoran yang lebih representatif. Pastor P. Leo dan P. Martinus melanjutkan tongkat estafet pastoral, memperluas jangkauan pelayanan hingga ke Kampung Loko. Meskipun menghadapi tekanan dari pajak yang tinggi dan penolakan lokal, semangat misi tak pernah padam. Periode pendudukan Jepang (1942-1946) memang sempat memperlambat laju perkembangan Gereja, namun tak menghentikannya. Setelah perang usai, Mgr. Van Valenberg secara resmi mengundang Pastor Passionis untuk berkarya di Kalimantan Barat, membuka babak baru dalam sejarah misi.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Tahun 1946 menjadi titik balik monumental dengan kedatangan Pastor Canisius Pijnappels CP, P. Theophile Seesing CP, dan P. Bernardinus Knippels CP dari Belanda. Mereka dengan tekun mempelajari bahasa Melayu dan Tionghoa, kemudian merintis karya misi di berbagai wilayah Ketapang, Sukadana, dan Teluk Melano, serta menjangkau pedalaman melalui Pastor Bernardinus pada akhir tahun yang sama. Puncak dari upaya-upaya ini adalah pengangkatan Ketapang sebagai Prefektur Apostolik pada tanggal 26 Juni 1954 oleh Paus Pius XII, yang kemudian menjadi Vikariat Apostolik pada tahun 1961 dengan Mgr. Gabriel Wilhelmus Sillekens CP sebagai Uskup pertama. Era ini juga ditandai dengan dimulainya pembangunan Gereja Katedral Ketapang pada tahun 1962, sebuah mahakarya arsitektur yang menjadi simbol kemandirian dan kekuatan spiritual Gereja lokal.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Di Balai Berkuak, benih iman Katolik mulai bertumbuh sekitar tahun 1952, melalui figur inspiratif Pang Maran, seorang pemimpin suku yang dengan ketulusan hati memeluk Katolik dan menjadi motor penggerak utama evangelisasi. Balai Berkuak, yang kala itu merupakan daerah terpencil dengan akses yang sangat sulit, menjadi saksi bisu kegigihan Pang Maran dalam menyebarkan ajaran dan mengundang misionaris. Meskipun menghadapi penolakan awal dari masyarakat Kesiap terhadap pembangunan sekolah swasta, Pang Maran tidak menyerah. Pada tahun 1950, ia bersama keluarganya memutuskan untuk menetap di Balai Berkuak, membawa serta tokoh-tokoh kunci seperti Kek Keot dan Ceromai, yang kemudian turut serta dalam pendirian sekolah dan kapel, menandai dimulainya pembangunan komunitas Katolik yang nyata.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Kedatangan Pastor Herman ke Balai Berkuak pada tahun 1952 disambut dengan sukacita yang meluap oleh Pang Maran. Pastor Herman dengan sabar dan penuh dedikasi mengajarkan Kitab Kejadian serta dasar-dasar iman Katolik, memimpin upacara penyiaraman agama pertama yang menjadi momen tak terlupakan bagi masyarakat setempat. Tokoh lokal seperti Kelingah (Rosalia Kawilinah) menjadi tangan kanan Pastor Herman dalam penginjilan dan katekismus, yang kemudian berujung pada penahbisan Pastor Paskalis Nores sebagai imam lokal pertama, sebuah tonggak penting menuju kemandirian klerus pribumi. Penginjilan yang intensif ini menghasilkan baptisan massal di Pendaun pada tahun 1954, menunjukkan dampak dan jangkauan misi yang luas di pedalaman Kalimantan Barat.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Pemerintah turut memberikan dukungan melalui penugasan P.F. Bantang sebagai Camat di Balai Berkuak pada tahun 1952. Kolaborasi antara P.F. Bantang, Pang Maran, dan Danel menjadi kekuatan pendorong dalam memperkuat eksistensi umat Katolik. Didirikannya Sekolah Rakyat (SR) di Balai Berkuak, yang kemudian berkembang menjadi Sekolah Partikulir, menunjukkan komitmen terhadap pendidikan dan pemberantasan buta huruf di kalangan masyarakat. Pembangunan kapel kedua yang lebih permanen dimulai pada tahun 1955, yang didukung oleh semangat gotong royong masyarakat dan bantuan pemerintah, menandai peningkatan kualitas fasilitas Gereja yang signifikan.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Namun, misi Katolik juga harus menghadapi berbagai tantangan, termasuk stigma bahwa agama Katolik dibawa oleh "penjajah," seperti yang disuarakan oleh Kek Bengkeh. Meskipun demikian, Kek Bengkeh pada akhirnya menyadari manfaat yang dibawa oleh misionaris, menunjukkan adanya adaptasi dan penerimaan. Larangan pemerintah Indonesia pada tahun 1954 yang menghentikan kedatangan misionaris Belanda memang menghadirkan kendala, namun tidak menyurutkan semangat umat Katolik lokal. Para misionaris, dengan dedikasi luar biasa, terus melakukan turne yang sulit, menembus pedalaman dengan motor dan menginap di tempat seadanya, menunjukkan komitmen mereka yang tak tergoyahkan.</p>
        </div>

        <div className="sejarah-paragraph mb-4">
          <p>Pada tahun 1990, Paroki Santo Martinus Balai Berkuak mencatat jumlah umat Katolik yang mencapai 6.061 jiwa, sebuah angka yang mencerminkan pertumbuhan iman yang pesat. Paroki ini, yang awalnya dikelola oleh Pastor Made, kemudian diserahkan kepada imam-imam praja pada tahun 1993, menandai era baru kepemimpinan klerus lokal yang lebih mandiri. Perkembangan lebih lanjut terlihat dengan pembentukan Pra Paroki Meraban dan Botong pada tahun 2010, serta penahbisan Pastor Paskalis Nores sebagai imam Kongregasi Passionis. Momen bersejarah ini disaksikan oleh Mgr. Blasius Pujaraharja Pr, Uskup Ketapang, dan Gubernur Kalimantan Barat, Cornelis MH, yang turut meresmikan gereja baru, menegaskan bahwa Gereja Katolik di Ketapang telah tumbuh menjadi komunitas yang kuat, mandiri, dan berakar dalam budaya lokal.</p>
        </div>
      </Container>

      <BottomContent /> {/* Menampilkan footer di bagian bawah */}
    </div>
  );
};

export default SejarahParoki;