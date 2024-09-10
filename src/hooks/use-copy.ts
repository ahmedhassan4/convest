import { Slide, toast } from 'react-toastify';
import { useCopyToClipboard } from 'react-use';

const useCopy = () => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const handleCopy = (text: string) => {
    copyToClipboard(text);
    toast.success('Copied', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });
  };
  return {
    handleCopy
  }
};
export default useCopy;
