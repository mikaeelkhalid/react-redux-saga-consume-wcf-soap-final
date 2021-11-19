export const xmlHelper = (data: any) => {
  return data.replace(/<(\/?)([^:>\s]*:)?([^>]+)>/g, '<$1$3>');
};
