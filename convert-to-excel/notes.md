In this example, we're using a regular expression (/\s+/) to split each row into an array of columns, using one or more whitespace characters as the delimiter.

We're also setting the column widths based on the length of the data in the first row, using the XLSX.utils.sheet_set_column_widths function. This ensures that each column is wide enough to accommodate the widest data in that column.