import { faTrash, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import styles from './downloads.module.scss';

interface DownloadedFile {
  id: number;
  src: string;
}

export default function Downloads() {
  const [downloads, setDownloads] = useState([]);

  let initialized: boolean = false;
  let storageService: LocalStorageService;

  // Retrieve all partner NFTs
  useEffect(() => {
    if (!initialized) {
      let dls: DownloadedFile[] = [];
      storageService = new LocalStorageService();
      storageService.GetDownloads().forEach((value, key) => {
        dls.push({
          id: key,
          src: value,
        });
      });
      console.log(dls);
      setDownloads(dls);
      initialized = true;
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
    storageService = new LocalStorageService();
    storageService.RemoveDownload(id);
    initialized = false;
  }

  return (
    <div className={styles.downloadsWrapper}>
      <h1>Download History</h1>
      <div className={styles.itemsWrapper}>
        {downloads.map((download: DownloadedFile) => (
          <div className={styles.itemWrapper} key={`${download.id}`}>
            <img src={download.src} />
            <div className={styles.buttonWrapper}>
              <button
                className='button success'
                onClick={() => downloadUri(download.src, download.id + '.png')}
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
        ))}
      </div>
    </div>
  );
}
