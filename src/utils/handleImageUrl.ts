export const handleImageUrl = (type: string) => {
    let url: string;
    switch (type?.toLowerCase()) {
      case "folder":
        url = "/folderIcon.svg";
        break;
      default:
        url = "/fileIcon.svg";
        break;
    }
    return url;
  };