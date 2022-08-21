import Image from 'next/image';
import mypic from '../public/images/test.png';

function Avatar() {
  const imageUrl =
    'https://i.shinji.xyz/static/shonen-junk/i/reveals/800x800/241f242c7abe9bb91fd71dd3f1590daddf5a2fc2de0453c9d13432e0e5c4e62a.png?v=20220526';

  fetch(imageUrl)
    //                         vvvv
    .then((response) => response.blob())
    .then((imageBlob) => {
      // Then create a local URL for that image and print it
      const imageObjectURL = URL.createObjectURL(imageBlob);
    });

  return <Image src={mypic} alt='me' width='64' height='64' />;
}

export default Avatar;
