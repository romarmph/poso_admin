import * as XLSX from 'xlsx';
// import fs from 'fs';

// XLSX.set_fs(fs);

export default function exportData(data: unknown[], name: string) {
	const worksheet = XLSX.utils.json_to_sheet(data);
	const workbook = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(workbook, worksheet);

	XLSX.writeFile(workbook, `${name}.xlsx`, { compression: false });
}
