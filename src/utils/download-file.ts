import FileSaver from 'file-saver'


export const downloadImage = (imageUrl: string | URL, fileName: any) => {
  // TODO enable CROS from Backend to use the original URL instead of using cors proxy
  fetch('https://corsproxy.io/?' + encodeURIComponent(imageUrl.toString()))
    .then(response => response.blob())
    .then(blob => {
      FileSaver.saveAs(blob, fileName);
    })
    .catch(error => {
      console.error('Error downloading image:', error);
    });
};