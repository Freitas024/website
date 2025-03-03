import { useCallback } from "react";

export function useDownload() {
  const downloadFile = useCallback((filePath, fileName) => {
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Erro ao baixar o arquivo:", error);
      });
  }, []);

  return { downloadFile };
}