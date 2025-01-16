<template>
    <div class="doctor-table-container">
      <h2>Cenník procedúr</h2>
      <table>
        <thead>
          <tr>
            <th class="table-header">Typická fyzio procedúra</th>
            <th class="table-header">Cena (v EUR)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, procedure) in doctorPrices" :key="procedure">
            <td>{{ procedure }}</td>
            <td>{{ price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        doctorPrices: {

        "Fyzioterapeutická diagnostika": "30 - 50",
          "Individuálna fyzioterapia": "40 - 80",
          "Masáž chrbta (regeneračná/relaxačná)": "25 - 45",
          "Lymfodrenážna terapia": "50 - 90",
          "Rehabilitácia po operáciách (koleno, rameno)": "60 - 120",
          "Liečba bolestí chrbtice (manuálne techniky)": "50 - 100",
          "Kinesiotaping (aplikácia tejpovacích pások)": "20 - 40",
          "Elektroterapia": "15 - 30",
          "Ultrazvuková terapia": "20 - 40",
          "Rehabilitácia pre športovcov (prevencia zranení)": "50 - 90"

    }
      };
    }
  };
  </script>
  
  <style scoped>
  .doctor-table-container {
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse; 
  }
  
  .table-header {
    text-align: left; 
  }
   
  </style>
  