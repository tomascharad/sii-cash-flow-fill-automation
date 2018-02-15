const cashFlowTable = $("#main > table > tbody > tr > td > table.tabla").eq(1)
cashFlowTable.find("tr").each((i, row) => {
  const input = $(row).find("td input");
  if (input.length > 0) {
    const inputValue = input.val();
    const registryAmount = $(row).find("td").eq(9).text();
    if (!inputValue && registryAmount) {
      input.val(registryAmount);
      input.trigger('change');
    }
  }
});