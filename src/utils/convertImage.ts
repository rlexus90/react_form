export const convertImage = (file: File): Promise<string> =>
  new Promise((res, rej) => {
    const filereader = new FileReader();
    filereader.onloadend = () => {
      if (typeof filereader.result === 'string') return res(filereader.result);
      rej('some error');
    };
    filereader.readAsDataURL(file);
  });
