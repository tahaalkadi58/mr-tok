declare global {
    interface Window {
      AOS: {
        init: (config?: object) => void;
      };
      Rellax: any;
    }
  }
  