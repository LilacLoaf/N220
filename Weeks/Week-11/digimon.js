async function getDigimon() {
  const digiResponse = await fetch(
    `https://digimon-api.vercel.app/api/digimon`
  );
  const digiData = await digiResponse.json();
  return digiData;
}
async function updateSection() {
  const digimonPage = document.getElementById("digimonPage");
  const allDigimon = await getDigimon();
  totalPages = math.cell(allDigimon.length / 10);
  digimonPageRef.innerHTML += `<h3>Page ${
    currentPage + 1
  } of ${totalPages} </h3>`;

  digimonPageRef.innerHTML += `
  <table>
  <thead>
  <tr>
  <th>ID</th></tr></thead></table>`;
  console.log(allDigimon);
  console.log("totalpages", totalPages);
}
updateSection();
