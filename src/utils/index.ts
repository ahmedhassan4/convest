export const removeEmptyQueryParams = (url: string): string | undefined => {
    const [path, queryString] = url.split('?');
    if (!queryString) return url;
  
    const params = new URLSearchParams(queryString);
    params.forEach((value, key) => {
      if (!value || ['null', 'undefined'].includes(value)) {
        params.delete(key);
      }
    });
  
    return `${path}?${params.toString()}`;
  }
  
  export const convertBytes = function(bytes: number) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  
    if (bytes == 0) {
      return "n/a";
    }
  
    // No need for parseInt, Math.floor already returns a number
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
  
    if (i == 0) {
      return bytes + " " + sizes[i];
    }
  
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
  }
  