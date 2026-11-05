import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './page.module.scss';

const pdfUrl = '/backline/garavito-renta-audio.pdf';
const catalogPages = Array.from(
  { length: 8 },
  (_, index) => `/backline/pages/page-${index + 1}.jpg`,
);

export const metadata: Metadata = {
  title: 'Renta de audio y backline — Gerardo Garavito',
  description:
    'Equipo de sonido, backline, montaje y asistencia técnica en Monterrey.',
};

export default function BacklinePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <h1>renta de audio y backline</h1>
          <p className={styles.contactName}>Gerardo Garavito</p>
          <Image
            src='/backline/contact.png'
            width={319}
            height={43}
            alt='WhatsApp'
            className={styles.contact}
          />
        </div>

        <a href={pdfUrl} download>
          descargar PDF
        </a>
      </header>

      <iframe
        className={styles.catalog}
        src={`${pdfUrl}#view=FitH`}
        title='Catálogo de renta de audio y backline'
      />

      <div className={styles.catalogPages}>
        {catalogPages.map((page, index) => (
          <Image
            key={page}
            src={page}
            width={1600}
            height={900}
            alt={`Catálogo de renta de audio, página ${index + 1} de ${catalogPages.length}`}
            className={styles.catalogPage}
            sizes='100vw'
          />
        ))}
      </div>

      <p className={styles.fallback}>
        Si el catálogo no aparece,{' '}
        <a href={pdfUrl} target='_blank' rel='noopener noreferrer'>
          ábrelo directamente
        </a>
        .
      </p>
    </main>
  );
}
