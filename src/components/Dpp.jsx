import React from 'react';
import TopNavbar from '../components/TopNavbar';
import BottomContent from '../components/BottomContent';

const Dpp = () => {
  return (
    <>
      <TopNavbar />

      <style jsx>{`
        :root {
          --primary-brown: #6b4c30;
          --light-brown: #f8f1e7;
          --accent-gold: #d4af37;
          --text-secondary-dark: #555;
        }

        .text-brown {
          color: var(--primary-brown);
        }

        .bg-brown {
          background-color: var(--primary-brown);
        }

        .bg-light-brown {
          background-color: var(--light-brown);
        }

        .card-header-accent {
          border-bottom: 3px solid var(--accent-gold);
        }

        .list-group-item strong {
          color: var(--primary-brown);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ccc;
        }

        .section-header h1 {
          font-weight: 700;
        }

        .section-header p {
          color: var(--text-secondary-dark);
        }
      `}</style>

      <div className="container my-5">
        <header className="section-header">
          <h1 className="display-4 text-brown">Dewan Pastoral Paroki</h1>
          <p className="lead">
            Paroki Santo Martinus Balai Berkuak<br />
            Keuskupan Ketapang<br />
            Periode 2025 - 2028
          </p>
        </header>

        <section className="dpp-structure">
          {/* Pengurus Harian */}
          <div className="card shadow-sm mb-5">
            <div className="card-header bg-brown text-white py-3 card-header-accent">
              <h4 className="mb-0">1. Pengurus Harian / Dewan Harian</h4>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><strong>Ketua Umum I:</strong> RD Cyrius Ndora</li>
              <li className="list-group-item"><strong>Ketua Umum II:</strong> RD. Thomas Sunarto</li>
              <li className="list-group-item"><strong>Ketua Umum III:</strong> RD. Yosafat Elly Dhita Karunia</li>
              <li className="list-group-item"><strong>Ketua I:</strong> Martinus Ahen</li>
              <li className="list-group-item"><strong>Ketua II:</strong> Agustinus Tri Harisuyatno</li>
              <li className="list-group-item"><strong>Sekretaris I:</strong> Marselinus Armin</li>
              <li className="list-group-item"><strong>Sekretaris II:</strong> Sikem</li>
              <li className="list-group-item"><strong>Bendahara:</strong> Antonius Mill</li>
            </ul>
          </div>

          {/* Bidang-bidang */}
          <h3 className="mb-4 text-brown">2. Bidang-Bidang</h3>

          {[
            {
              title: '2.1 Liturgi dan Peribadatan',
              ketua: 'Doly Parton',
              items: [
                ['TK Tata Laksana Liturgi', 'Br. Batista Sulli Ellu'],
                ['TK Putra/i Altar', 'Br. Grasianus Mbaling, Betilia Aling'],
                ['TK Musik Liturgi', 'Emanuel Wendy, Dominikus Herman'],
                ['TK Paramenta & Tata Altar', 'Sr. Sesilia, Sutiyam, Lena'],
                ['TK Prodiakon', 'Laherlinus'],
                ['TK Koor & Dirigen', 'Br. Johan, Anto Bersen, Leonela'],
                ['TK Lektor & Pemazmur', 'Lilis, Kosmas'],
              ]
            },
            {
              title: '2.2 Pewartaan',
              ketua: 'Agustinus Agus',
              items: [
                ['TK Sakramen Inisiasi', 'Ambrosius Ewal, A. Yopiyanto, Yuni Sara'],
                ['TK PIA', 'Sr. Agustini, Diana, Setiana'],
                ['TK PIR', 'Eusabius Ebin, Lita Hartina'],
                ['TK PID', 'Br. Simon Paskalis Kun, Yohanes Karendy'],
                ['TK Kerasulan Kitab Suci', 'Lukas Manden, Marselina Aping'],
              ]
            },
            {
              title: '2.3 Paguyuban & Tata Organisasi',
              ketua: 'Aloysius Frisko Wijayatmo',
              items: [
                ['TK OMK', 'Mariana Kawina, Rupinus Bulet Langu'],
                ['TK Ibu-ibu Paroki', 'Viktoria Martini, Saripiana, Helena Baket, Kornelia Leni'],
                ['TK Perkawinan & Pendampingan', 'Sabinus Amon'],
                ['TK Kerasulan Awam', 'Gereg, Albinus Begat, Valernianus Kasem'],
                ['TK Hubungan Agama & Kepercayaan', 'Yakobus Akon, Fransiskus Meki'],
              ]
            },
            {
              title: '2.4 Pelayanan Kemasyarakatan',
              ketua: 'Paulus Unjing',
              items: [
                ['TK PSE Caritas', 'Aloysius Rachmat, Irwanto'],
                ['TK Pendidikan', 'Beda Hartono, Tiodora'],
                ['TK Budaya', 'Lakai, L. Mario, Dessy Elmathaena'],
                ['TK Komunikasi Sosial', 'Vinsentius Hermanto'],
                ['TK Urusan Kematian', 'Valentino Yulius, Ersan, Hermandus'],
              ]
            },
            {
              title: '2.5 Sarana dan Prasarana',
              ketua: 'Antonius Mill',
              items: [
                ['TK Rumah Tangga Pastoran', 'Petronela, Merry, Martina Icim'],
                ['TK Rumah Tangga Gereja', 'Robinus Iyami, Amin Chong'],
                ['TK Tata Suara dan Listrik', 'Gervasius Aman, Robson'],
                ['TK Keamanan Gereja', 'Suradi Anu, Robby Sastro'],
                ['TK Pemeliharaan & Pembangunan Gedung', 'Kornelius Kiung, Paulus Stefanus, Aloysius'],
              ]
            },
            {
              title: '2.6 Aset',
              ketua: 'Petrus Apin',
              items: [
                ['Anggota', 'Victo Nikolaus'],
                ['Anggota', 'Martinus Talim'],
              ]
            },
          ].map((bidang, idx) => (
            <div className="card shadow-sm mb-4" key={idx}>
              <div className="card-header bg-light-brown text-dark py-2">
                <h5 className="mb-0">{bidang.title} <small className="text-muted fw-normal">(Ketua: {bidang.ketua})</small></h5>
              </div>
              <ul className="list-group list-group-flush">
                {bidang.items.map(([label, value], i) => (
                  <li className="list-group-item" key={i}>
                    <strong>{label}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <BottomContent />
    </>
  );
};

export default Dpp;
