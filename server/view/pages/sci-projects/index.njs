{% extends "partials/main.njs" %}


{% block morehead %}
<style>
  .elf-credits-ul {
    margin: 20px auto;
  }

  .elf-credits-ul li {
    margin: 10px auto;
  }

  .elf-credits-header {
    margin: 20px auto 40px;
  }
</style>

<script src="/scripts/elfResearch.js"></script>
{% endblock %}


{% block header %}
<div class="container">
  <h2>Scientific Research</h2>
</div>
{% endblock %}


{% block body %}
<div class="container text-justified mb-5">
  <p>
    In this page I'll try to organize the research I've done, linking each research to their own pages, where you can find their abstracts and public resources.
  </p>
</div>

<div id="spinner-container" class="container text-center mb-5">
  <span class="spinner-border"></span>
  <span>Loading...</span>
</div>

<div class="container" style="min-height: 60vh;">
  <table class="table table-hover mb-5">
    <thead>
      <tr>
        <th scope="col">Year</th>
        <th scope="col">Title</th>
      </tr>
    </thead>
    <tbody id="research-table"></tbody>
  </table>

  <h5>Labels</h5>
  <table class="table table-sm">
    <tbody id="badge-table"></tbody>
  </table>
</div>
<script>Elf.listResearch($("#research-table"), $("#badge-table"), $("#spinner-container"));</script>
{% endblock %}
