import type { Metadata } from 'next';
import styles from './page.module.scss';

const pdfUrl = '/backline/garavito-renta-audio.pdf';

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
          <p>Gerardo Garavito · WhatsApp 8115110723</p>
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
