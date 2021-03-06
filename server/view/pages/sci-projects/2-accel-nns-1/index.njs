{% extends "partials/main.njs" %}


{% block morehead %}
<style>
  h1 {
    margin-bottom: 0.5em;
    padding-top: 1em;
  }
</style>
{% endblock %}


{% block header %}
<div class="container">
  <h2>Scientific Initiation 2</h2>
  <h2>Accelerating Deep Neural Network Parameter Servers with High Performance Computing Techniques</h2>
</div>
{% endblock %}


{% block body %}
<div class="container text-justify">
  <h1>Abstract</h1>
  <p>
    Machine Learning (ML) has gathered a lot of interest from industry and academia as it increases the range of tasks that can be
      performed by computers: speech recognition, sentiment analysis, cancer detection, and much more.
    Neural Networks (NN) are a particular branch of ML that has achieved great popularity after winning recent well known image recognition contests;
      however, they can take days or weeks to be trained, which directly impacts productivity of interested parties.
    This project aims to accelerate Parameter Servers (PS), a common distributed algorithm for increasing the scale of NN applications.
    This will be initially done by applying High Performance Computing (HPC) techniques on a PS using only one level of parallelism, the minibatch level,
      and later by also exploiting parallelism on gradient calculation.
    Both investigation lines will be supported by design (e.g. PCAM analysis) and modelling (e.g. computational models) techniques,
      programming models (e.g. MPI, CUDA), theoretical results (e.g. Amdahl's Law) and metrics (e.g. speedup, depth-complexity) from HPC.
    By accelerating NNs we expect to increase the pace at which research in the area is carried, as well as ease the industrial process of
      designing NN models and deploying them within applications or services.
  </p>
</div>

<div class="container">
  <h1>Funding & Support</h1>
  <ul>
    <li>
      Funds from FAPESP, grant 2019/04519-7.
    </li>
    <li>
      Computational resources from <a target="_blank" href="http://www.cemeai.icmc.usp.br/">CeMEAI</a> (FAPESP grant 2013/07375-0).
    </li>
  </ul>
</div>
{% endblock %}
