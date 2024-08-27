export function format(dateString) {
    const [year, month] = dateString.split('-');
    const date = new Date(year, month - 1);
  
    return `${date.toString().slice(4, 7)} ${year}`;
  }