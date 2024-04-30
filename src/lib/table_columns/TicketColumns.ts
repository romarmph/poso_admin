import { TicketStatus } from "$lib/Components";
import { overlayStore } from "$lib/stores/overlayStore";
import { flexRender, type ColumnDef } from "@tanstack/svelte-table";
import RelatedTickesActions from "$lib/components/Table/Partials/RelatedTicketsAcionts.svelte"
import TicketNumberColumn from "$lib/components/Customs/TicketNumberColumn.svelte";

const { open } = overlayStore;

export const relatedTicketColumn: ColumnDef<Types.Ticket>[] = [
	{
		accessorKey: "id",
		cell: (info) => flexRender(TicketNumberColumn, { id: info.getValue() }),
		footer: (info) => info.column.id,
		header: "First Name",
	},
	{
		accessorKey: "first_name",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "First Name",
	},
	{
		accessorKey: "middle_name",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Middle Name",
	},
	{
		accessorKey: "last_name",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Last Name",
	},
	{
		accessorKey: "suffix",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Suffix",
	},
	{
		accessorKey: "birthdate",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Birth Date",
		accessorFn: (row) => {
			if (row.birthdate) {
				return new Date(row.birthdate).toDateString()
			}
		},
	},
	{
		accessorKey: "identification",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Identification",
		accessorFn: (row) => row.identification,
	},
	{
		accessorKey: "identification_type",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Identification Type",
		accessorFn: (row) => row.identification_type.toUpperCase(),
	},
	{
		accessorKey: "offense",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Offense",
		accessorFn: (row) => row.offense,
	},
	{
		accessorKey: "violation_date",
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
		header: "Violation Date",
		accessorFn: (row) => new Date(row.violation_date).toDateString(),
	},
	{
		accessorKey: "status",
		cell: (info) => flexRender(TicketStatus, { status: info.getValue() }),
		footer: (info) => info.column.id,
		header: "Status",
	},
	{
		accessorKey: "id",
		cell: (info) =>
			flexRender(RelatedTickesActions, {
				fireView: () => {
					open({
						props: {
							info: info.row.original as Types.Ticket,
						},
						id: "viewRelated",
					});
				},
				fireSet: () => { console.log("Hello") },
			}),
		header: "Actions",
		enableSorting: false,
	},
];


