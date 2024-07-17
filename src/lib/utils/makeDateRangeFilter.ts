export default function(month: number, year: number) {
  return {
    start: new Date(year, month, 2).toISOString().split('T')[0],
    end: new Date(year, month + 1, 1).toISOString().split('T')[0],
  }
}
