import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const Sakramen = () => {
  const sakramenExplanations = {
    Baptis: {
      title: 'Sakramen Baptis',
      description: 'Sakramen Baptis adalah pintu gerbang kehidupan rohani dan sakramen pertama yang diterima. Melalui baptis, seseorang dibebaskan dari dosa asal dan dosa pribadi, menjadi anggota Gereja, dan diadopsi menjadi anak Allah. Materi sakramen ini adalah air, dan forma-nya adalah rumusan "Aku membaptis engkau dalam nama Bapa dan Putra dan Roh Kudus."',
    },
    Ekaristi: {
      title: 'Sakramen Ekaristi',
      description: 'Sakramen Ekaristi adalah puncak dan sumber seluruh kehidupan Kristiani. Dalam Ekaristi, Kristus hadir secara nyata dalam rupa roti dan anggur, yang diubah menjadi Tubuh dan Darah-Nya. Ini adalah kurban syukur dan perjamuan kudus yang mempersatukan umat beriman dengan Kristus. Materi Ekaristi adalah roti gandum dan anggur dari buah anggur.',
    },
    Tobat: {
      title: 'Sakramen Tobat (Pengampunan Dosa)',
      description: 'Sakramen Tobat, juga dikenal sebagai Sakramen Pengakuan Dosa atau Rekonsiliasi, adalah sakramen di mana dosa-dosa yang dilakukan setelah baptis diampuni oleh Allah melalui pelayanan Gereja. Ini melibatkan penyesalan, pengakuan dosa kepada imam, dan niat untuk tidak berbuat dosa lagi. Forma sakramen ini adalah absolusi imam, dan materia-nya adalah perbuatan peniten (penyesalan, pengakuan, dan penitensi).',
    },
    Krisma: {
      title: 'Sakramen Krisma (Penguatan)',
      description: 'Sakramen Krisma atau Penguatan menyempurnakan rahmat baptis dan menganugerahkan Roh Kudus secara khusus, memperkuat umat beriman untuk menjadi saksi Kristus yang lebih matang. Materia sakramen ini adalah pengurapan minyak krisma pada dahi, dan forma-nya adalah rumusan "Terimalah tanda karunia Roh Kudus."',
    },
    Perkawinan: {
      title: 'Sakramen Perkawinan',
      description: 'Sakramen Perkawinan adalah perjanjian suci antara seorang pria dan seorang wanita yang membentuk persekutuan hidup dan kasih yang mendalam, terarah kepada kesejahteraan pasangan serta kelahiran dan pendidikan anak. Sakramen ini mengangkat cinta kasih manusiawi ke tingkat rahmat ilahi. Materia dan forma sakramen ini adalah persetujuan (konsensus) yang dinyatakan oleh kedua mempelai.',
    },
    PengurapanOrangSakit: {
      title: 'Sakramen Pengurapan Orang Sakit',
      description: 'Sakramen Pengurapan Orang Sakit (dahulu dikenal sebagai "Perminyakan Suci") adalah sakramen yang diberikan kepada umat beriman yang sedang sakit parah atau mendekati kematian. Melalui pengurapan minyak suci dan doa imam, sakramen ini memberikan penghiburan, kekuatan, dan pengampunan dosa, serta kadang-kadang pemulihan kesehatan jika itu kehendak Allah. Materia sakramen ini adalah pengurapan minyak zaitun yang diberkati, dan forma-nya adalah doa imam.',
    },
    Imamat: {
      title: 'Sakramen Imamat (Tahbisan Suci)',
      description: 'Sakramen Imamat atau Tahbisan Suci adalah sakramen di mana seseorang ditahbiskan menjadi pelayan Gereja sebagai diakon, imam, atau uskup untuk melayani umat Allah. Sakramen ini menganugerahkan kuasa rohani untuk merayakan sakramen-sakramen lain dan memberitakan Injil. Materi sakramen ini adalah penumpangan tangan oleh uskup, dan forma nya adalah doa tahbisan khusus.',
    },
  };

  return (
    <>
      <TopNavbar />

      <div style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#FFFFFF', 
        color: '#333', 
        padding: '30px',
        maxWidth: '800px',
        margin: '30px auto',
        borderRadius: '8px',
        boxShadow: 'none',
        lineHeight: '1.6'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          color: '#4B3621', 
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          Memahami Sakramen dalam Gereja Katolik
        </h1>

        <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
          <span style={{ color: 'brown', fontWeight: 'bold', fontSize: '1.5em' }}>S</span>akramen berasal dari kata Latin "Sacramentum", yang mengacu pada hal-hal yang suci atau ilahi. Lebih dari sekadar definisi, sakramen dipahami sebagai tanda nyata dari kasih dan keselamatan Allah yang dianugerahkan kepada umat manusia.
        </p>

        <p style={{
          fontStyle: 'italic',
          backgroundColor: '#F8F4E6', 
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
          fontSize: '1em',
          color: '#362016' 
        }}>
          "Tujuan sakramen adalah untuk menguduskan manusia, membangun Tubuh Kristus, dan pada akhirnya, mempersembahkan ibadat kepada Allah." (Konstitusi Sacrosanctum Concilium, art. 59).
        </p>

        <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
          Mengingat peran sakramen sebagai tanda dan sarana keselamatan ilahi, penerimaannya harus senantiasa berakar dan ditempatkan dalam kerangka iman. Sakramen itu sendiri diekspresikan melalui perpaduan kata-kata dan tindakan. Oleh karena itu, setiap sakramen dalam Gereja Katolik secara fundamental mengandung dua unsur esensial:
        </p>

        <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginBottom: '30px' }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Forma:</span> Mengacu pada perkataan atau rumusan doa yang menjelaskan dan mengiringi peristiwa ilahi yang terjadi.
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Materia:</span> Merujuk pada benda-benda material atau tindakan fisik tertentu yang dapat diamati dan menjadi sarana rahmat.
          </li>
        </ul>

        <h2 style={{
          fontSize: '1.8em',
          color: '#4B3621',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Tujuh Sakramen Gereja Katolik
        </h2>

        {/* Bagian untuk setiap sakramen dengan fungsionalitas dropdown */}
        <div style={{ marginTop: '20px' }}>
          {Object.keys(sakramenExplanations).map((key) => (
            <details key={key} style={{
              backgroundColor: '#F8F4E6',
              padding: '15px 20px',
              borderRadius: '8px',
              marginBottom: '15px',
              border: '1px solid #ddd',
              cursor: 'pointer'
            }}>
              <summary style={{
                fontWeight: 'bold',
                fontSize: '1.2em',
                color: '#4B3621',
                outline: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {sakramenExplanations[key].title}
              </summary>
              <p style={{
                marginTop: '15px',
                fontSize: '1em',
                color: '#333',
                lineHeight: '1.5'
              }}>
                {sakramenExplanations[key].description}
              </p>
            </details>
          ))}
        </div>
      </div>

      <BottomContent />
    </>
  );
};

export default Sakramen;