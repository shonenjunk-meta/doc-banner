import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import styles from './downloads.module.scss';

interface DownloadedFile {
  id: number;
  src: string;
}

export default function Downloads() {
  const [downloads, setDownloads] = useState([]);
  const initialized = useRef(false);

  // Retrieve all partner NFTs
  useEffect(() => {
    if (!initialized.current) {
      let dls: DownloadedFile[] = [];
      let storageService = new LocalStorageService();
      storageService.GetDownloads()?.forEach((value, key) => {
        dls.push({
          id: key,
          src: value,
        });
      });
      setDownloads(dls);
      initialized.current = true;
    }
  }, []);

  function downloadUri(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function removeDownload(id) {
    let storageService = new LocalStorageService();
    storageService.RemoveDownload(id);
    let downloadsCopy = [...downloads];
    let index = downloadsCopy.findIndex((item) => item.id === id);
    downloadsCopy.splice(index, 1);
    setDownloads(downloadsCopy);
  }

  return (
    <div className={styles.downloadsWrapper}>
      <h1>Download History</h1>
      <div className={styles.itemsWrapper}>
        {downloads.length === 0 ? (
          <p>
            No downloads yet.<Link href='/'> Let&apos;s create one.</Link>
          </p>
        ) : (
          downloads.map((download: DownloadedFile) => (
            <div className={styles.itemWrapper} key={download.id}>
              <img src={download.src} alt={download.id.toString()} />
              <div className={styles.buttonWrapper}>
                <button
                  className='button success'
                  onClick={() =>
                    downloadUri(download.src, download.id + '.png')
                  }
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
                <button
                  className='button danger'
                  onClick={() => removeDownload(download.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
